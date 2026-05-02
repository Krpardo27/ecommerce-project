import { prisma } from "@/lib/prisma";
import CategoriesSectionClient from "./CategoriesSectionClient";

const allowedSlugs = [
  "celulares",
  "computadores",
  "smartwatch",
  "camaras",
  "audifonos",
  "gaming",
  "tv-video",
  "accesorios",
];

async function getCategories() {
  const categories = await prisma.category.findMany({
    where: {
      slug: {
        in: allowedSlugs,
      },
    },
  });

  const ordered = allowedSlugs
    .map((slug) => categories.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return ordered;
}

export default async function CategoriesSection() {
  const categories = await getCategories();

  return <CategoriesSectionClient categories={categories} />;
}