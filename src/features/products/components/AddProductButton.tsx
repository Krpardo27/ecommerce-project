"use client";

import { Product } from "@/src/generated/prisma/client";
import { useStore } from "@/src/store";

type AddProductButtonProps = {
  product: Product
};

export default function AddProductButton({ product }: AddProductButtonProps) {
  const addToCart = useStore((state) => state.addToCart);

  return (
    <button
      onClick={() => addToCart(product)}
      type="button"
      className="w-full py-2 text-sm font-semibold rounded-md bg-black text-white hover:bg-[#DB4444] transition-colors duration-200"
    >
      Añadir al carrito
    </button>
  );
}
