import { prisma } from "@/src/lib/prisma";
import { notFound } from "next/navigation";
import CategoryGrid from "@/src/features/category/components/CategoryGrid";
import Heading from "@/src/shared/components/ui/typography/Heading";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  if (!slug) {
    return <div>Slug inválido</div>;
  }

  const category = await prisma.category.findUnique({
    where: { slug },
    include: {
      products: true,
    },
  });

  if (!category) {
    notFound();
  }

  return (
    <div>
      <Heading level={1} className="lg:pb-8 pb-4">{category.name}</Heading>

      <CategoryGrid products={category.products} />
    </div>
  );
}