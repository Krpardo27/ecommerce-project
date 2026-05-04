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
    if (usedSlugs.has(slug)) {
      slug = `${baseSlug}-${i++}`;
      continue;
    }

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
    console.log("🧹 Cleaning database...");
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();

    const parentCategories = categories.filter((c) => !c.parentSlug);

    for (const parent of parentCategories) {
      await prisma.category.create({
        data: {
          name: parent.name,
          slug: parent.slug,
        },
      });
    }

    const dbCategories = await prisma.category.findMany({
      select: { id: true, slug: true },
    });

    const categoryMap = Object.fromEntries(
      dbCategories.map((c) => [c.slug, c.id]),
    ) as Record<string, number>;

    const childCategories = categories.filter((c) => c.parentSlug);

    for (const child of childCategories) {
      const parentId = categoryMap[child.parentSlug!];

      if (!parentId) {
        throw new Error(`❌ Parent not found: ${child.parentSlug}`);
      }

      await prisma.category.create({
        data: {
          name: child.name,
          slug: child.slug,
          parentId,
        },
      });
    }

    const allCategories = await prisma.category.findMany({
      select: { id: true, slug: true },
    });

    const finalCategoryMap = Object.fromEntries(
      allCategories.map((c) => [c.slug, c.id]),
    ) as Record<string, number>;

    const usedSlugs = new Set<string>();

    const allProducts = [...products];

    const productsWithRelations = await Promise.all(
      allProducts.map(async ({ categorySlug, ...product }) => {
        const categoryId = finalCategoryMap[categorySlug];

        if (!categoryId) {
          throw new Error(`❌ Category not found for product: ${product.name}`);
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
