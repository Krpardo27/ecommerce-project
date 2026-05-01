
"use client";

import Link from "next/link";
import { FiShoppingCart, FiHeart } from "react-icons/fi";

export function Actions() {
  return (
    <div className="flex items-center gap-4">
      
      {/* Favoritos */}
      <Link href="/favoritos" className="relative text-black">
        <FiHeart className="w-5 h-5" />
      </Link>

      {/* Carrito */}
      <Link href="/carrito" className="relative ">
        <FiShoppingCart className="w-5 h-5 text-black" />
      </Link>
    </div>
  );
}