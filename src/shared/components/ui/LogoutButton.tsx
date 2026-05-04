"use client";

import { signOut } from "@/src/lib/auth-client";
import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";

export default function LogoutButton() {
  const router = useRouter();

  return (
    <button
      onClick={async () => {
        await signOut();
        router.push("/auth/login");
      }}
      className="
        flex items-center gap-3
        w-full px-4 py-3
        text-sm font-medium
        text-red-500
        hover:bg-red-50
        rounded-xl
        transition 
        cursor-pointer
        active:scale-[0.98]
      "
    >
      <FiLogOut size={18} />
      Cerrar sesión
    </button>
  );
}