"use client";

import { Product } from "@/src/generated/prisma/client";
import Image from "next/image";
import { FiEye, FiHeart } from "react-icons/fi";
import AddProductButton from "./AddProductButton";
import { formatPriceCLP } from "@/src/utils/formatPrice";

type Props = {
  product: Product;
  variant?: "default" | "flash";
};

export default function ProductCard({
  product,
  variant = "default",
}: Props) {
  const hasDiscount =
    product.discountPrice !== null &&
    product.discountPrice !== undefined &&
    product.discountPrice < product.price;

  const discount = hasDiscount
    ? Math.round(
        ((product.price - product.discountPrice!) / product.price) * 100
      )
    : null;

  return (
    <div className="group h-[350px] rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden">
      
      {/* IMAGE */}
      <div className="relative h-[200px] md:h-[220px] bg-neutral-100 flex items-center justify-center">
        <div className="relative w-[140px] md:w-[160px] h-[200px] md:h-[220px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* DISCOUNT BADGE */}
        {hasDiscount && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-md font-semibold">
            -{discount}%
          </span>
        )}

        {/* ACTIONS */}
        <div
          className={`
            absolute top-3 right-3 flex flex-col gap-2 z-10
            ${
              variant === "flash"
                ? "opacity-0 group-hover:opacity-100 transition"
                : ""
            }
          `}
        >
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-[#DB4444] hover:text-white transition">
            <FiHeart size={16} />
          </button>

          <button className="bg-white p-2 rounded-full shadow-md hover:bg-[#DB4444] hover:text-white transition">
            <FiEye size={16} />
          </button>
        </div>
      </div>

      {/* INFO */}
      <div className="flex-1 p-3 md:p-4 flex flex-col">
        <h3 className="text-sm font-medium text-black line-clamp-2">
          {product.name}
        </h3>

        {/* PRICE */}
        <div className="mt-2 flex items-center gap-2">
          {hasDiscount ? (
            <>
              <span className="text-red-500 font-bold text-sm md:text-base">
                {formatPriceCLP(product.discountPrice!)}
              </span>

              <span className="text-xs line-through text-gray-400">
                {formatPriceCLP(product.price)}
              </span>
            </>
          ) : (
            <span className="text-red-500 font-bold text-sm md:text-base">
              {formatPriceCLP(product.price)}
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <AddProductButton product={product} />
        </div>
      </div>
    </div>
  );
}