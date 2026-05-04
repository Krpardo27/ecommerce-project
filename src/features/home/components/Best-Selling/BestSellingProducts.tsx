import { Product } from "@/src/generated/prisma/client";
import ProductCard from "@/src/features/products/components/ProductCard";

type Props = {
  products: Product[];
};

export default function BestSellingProducts({ products }: Props) {
  return (
    <section className="max-w-7xl mx-auto w-full py-16 space-y-7">
      {/* HEADER */}
      <div className="flex items-end justify-between px-2 gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="w-[30px] h-[40px] bg-[#DB4444] rounded-sm" />
            <span className="text-red-500 font-semibold">Este mes</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold uppercase text-black">
            Productos más vendidos
          </h2>
        </div>

        <div className="flex items-center">
          <button className="bg-[#DB4444] text-white py-2 px-8 rounded-md hover:bg-[#C0392B] transition">
            Ver todos
          </button>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
