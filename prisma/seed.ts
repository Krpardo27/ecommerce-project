import { PrismaClient } from "@/src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

import { categories } from "./data/categories";
import { products } from "./data/products";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function generateUniqueSlug(baseSlug: string, usedSlugs: Set<string>) {
  let slug = baseSlug;
  let i = 1;

  while (true) {
    // evitar duplicados en memoria
    if (usedSlugs.has(slug)) {
      slug = `${baseSlug}-${i++}`;
      continue;
    }

    // evitar duplicados en DB
    const exists = await prisma.product.findUnique({
      where: { slug },
    });

    if (!exists) {
      usedSlugs.add(slug);
      return slug;
    }

    slug = `${baseSlug}-${i++}`;
  }
}

async function main() {
  try {
    await prisma.category.createMany({
      data: categories,
      skipDuplicates: true,
    });

    const existingCategories = await prisma.category.findMany({
      select: { id: true, slug: true },
    });

    const categoryMap = existingCategories.reduce<Record<string, number>>(
      (map, category) => {
        map[category.slug] = category.id;
        return map;
      },
      {},
    );

    const usedSlugs = new Set<string>();

    const productsWithRelations = await Promise.all(
      products.map(async ({ categorySlug, ...product }) => {
        const categoryId = categoryMap[categorySlug];

        if (!categoryId) {
          throw new Error(`Category not found for product: ${product.name}`);
        }

        const baseSlug = slugify(product.name);

        const slug = await generateUniqueSlug(baseSlug, usedSlugs);

        return {
          ...product,
          slug,
          categoryId,
        };
      }),
    );

    await prisma.product.createMany({
      data: productsWithRelations,
      skipDuplicates: true,
    });

    console.log("✅ Data seeded successfully");
  } catch (error) {
    console.error("❌ Error seeding data:", error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
