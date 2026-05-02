"use client";

import Link from "next/link";
import { FiShoppingCart, FiHeart, FiUser } from "react-icons/fi";

export function Actions() {
  return (
    <div className="flex items-center gap-5">

      {/* Favoritos */}
      <Link
        href="/favoritos"
        className="
          relative group
          p-2 rounded-full
          transition-all duration-200
          hover:bg-[#D44444]/10
        "
      >
        <FiHeart
          className="
            w-5 h-5 text-black
            transition-all duration-200
            group-hover:text-[#D44444]
            group-hover:scale-110
          "
        />

        {/* Badge ejemplo */}
        <span className="
          absolute -top-1 -right-1
          text-[10px] font-medium
          bg-[#D44444] text-white
          w-4 h-4 flex items-center justify-center
          rounded-full
        ">
          2
        </span>
      </Link>

      {/* Carrito */}
      <Link
        href="/carrito"
        className="
          relative group
          p-2 rounded-full
          transition-all duration-200
          hover:bg-[#D44444]/10
        "
      >
        <FiShoppingCart
          className="
            w-5 h-5 text-black
            transition-all duration-200
            group-hover:text-[#D44444]
            group-hover:scale-110
          "
        />

        <span className="
          absolute -top-1 -right-1
          text-[10px] font-medium
          bg-[#D44444] text-white
          w-4 h-4 flex items-center justify-center
          rounded-full
        ">
          3
        </span>
      </Link>

      {/* Usuario */}
      <Link
        href="/auth/login"
        className="
          relative group
          p-2 rounded-full
          transition-all duration-200
          hover:bg-[#D44444]/10
        "
      >
        <FiUser
          className="
            w-5 h-5 text-black
            transition-all duration-200
            group-hover:text-[#D44444]
            group-hover:scale-110
          "
        />
      </Link>

    </div>
  );
}