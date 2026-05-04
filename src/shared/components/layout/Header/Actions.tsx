"use client";

import { signOut } from "@/src/lib/auth-client";
import Link from "next/link";
import { FiShoppingCart, FiHeart, FiUser } from "react-icons/fi";
import { useRouter } from 'next/navigation'
import { useStore } from "@/src/store";

type Props = {
  user: {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  } | null;
};

export function Actions({ user }: Props) {

  const router = useRouter()

  const cart = useStore((state) => state.cart);

  const itemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex items-center gap-5">

      {/* Favoritos */}
      <Link
        href="/favoritos"
        className="relative group p-2 rounded-full hover:bg-[#D44444]/10 transition"
      >
        <FiHeart className="w-5 h-5 text-black group-hover:text-[#D44444] group-hover:scale-110 transition" />
        <span className="absolute -top-1 -right-1 text-[10px] bg-[#D44444] text-white w-4 h-4 flex items-center justify-center rounded-full">
          2
        </span>
      </Link>

      {/* Carrito */}
      <Link
        href="/cart"
        className="relative group p-2 rounded-full hover:bg-[#D44444]/10 transition"
      >
        <FiShoppingCart className="w-5 h-5 text-black group-hover:text-[#D44444] group-hover:scale-110 transition" />

        {itemsCount > 0 && (
          <span className="absolute -top-1 -right-1 text-[10px] bg-[#D44444] text-white w-4 h-4 flex items-center justify-center rounded-full">
            {itemsCount}
          </span>
        )}
      </Link>

      {/* Usuario */}
      {!user ? (
        // NO LOGEADO
        <Link
          href="/auth/login"
          className="group p-2 rounded-full hover:bg-[#D44444]/10 transition"
        >
          <FiUser className="w-5 h-5 text-black group-hover:text-[#D44444] group-hover:scale-110 transition" />
        </Link>
      ) : (
        // ✅ LOGEADO
        <div className="flex items-center gap-2">

          {/* Avatar / nombre */}
          <span className="text-sm text-zinc-700 hidden sm:block">
            {user.name ?? user.email}
          </span>

          {/* Ir a dashboard */}
          <Link
            href="/dashboard"
            className="group p-2 rounded-full hover:bg-[#D44444]/10 transition"
          >
            <FiUser className="w-5 h-5 text-black group-hover:text-[#D44444] group-hover:scale-110 transition" />
          </Link>

          <button
            onClick={async () => {
              await signOut();
              router.push("/auth/login");
            }}
            className="text-xs text-red-500 hover:text-red-600"
          >
            Salir
          </button>
        </div>
      )}
    </div>
  );
}