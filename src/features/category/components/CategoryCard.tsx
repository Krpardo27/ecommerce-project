import { Product } from "@/src/generated/prisma/client";
import { formatPriceCLP } from "@/src/utils/formatPrice";
import Image from "next/image";
import { FiEye, FiHeart } from "react-icons/fi";
import AddProductButton from "../../products/components/AddProductButton";

type CategoryCardProps = {
  product: Product;
};

export default function CategoryCard({ product }: CategoryCardProps) {
  return (
    <div
      key={product.id}
      className="group h-[350px] rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* IMAGE */}
      <div className="relative h-[200px] md:h-[220px] bg-neutral-100 flex items-center justify-center overflow-hidden">
        <div className="relative w-[140px] md:w-[160px] h-[180px] md:h-[200px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* ACTIONS (SIEMPRE VISIBLES) */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          <button className="bg-white p-2 rounded-full shadow-md transition-all duration-200 hover:bg-[#DB4444] hover:text-white hover:scale-105">
            <FiHeart size={16} />
          </button>

          <button className="bg-white p-2 rounded-full shadow-md transition-all duration-200 hover:bg-[#DB4444] hover:text-white hover:scale-105">
            <FiEye size={16} />
          </button>
        </div>
      </div>

      {/* INFO */}
      <div className="flex-1 p-3 md:p-4 flex flex-col">
        <h3 className="text-sm font-medium text-black line-clamp-2">
          {product.name}
        </h3>

        <div className="mt-2">
          <span className="text-red-500 font-bold text-sm md:text-base">
            {formatPriceCLP(product.price)}
          </span>
        </div>

        <div className="mt-auto">
          <AddProductButton product={product} />
        </div>
      </div>
    </div>
  );
}
