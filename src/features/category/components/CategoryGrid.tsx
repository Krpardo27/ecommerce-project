import { Product } from "@/src/generated/prisma/client";
import CategoryCard from "./CategoryCard";

type Props = {
  products: Product[];
};

export default function CategoryGrid({ products }: Props) {
  if (!products || products.length === 0) {
    return <div>No hay productos en esta categoría</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <CategoryCard key={product.id} product={product} />
      ))}
    </div>
  );
}