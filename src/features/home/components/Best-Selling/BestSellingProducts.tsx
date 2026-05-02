"use client";

import Image from "next/image";
import { bestSellingProducts } from "./bestselling";
import { FiHeart, FiEye } from "react-icons/fi";
import { formatPriceCLP } from "@/src/utils/formatPrice";

export default function BestSellingProducts() {
  return (
    <section className="max-w-7xl mx-auto w-full py-16 space-y-7">
      {/* HEADER */}
      <div className="flex items-end justify-between px-2 gap-4">
        {/* IZQUIERDA */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="w-[30px] h-[40px] bg-[#DB4444] rounded-sm" />
            <span className="text-red-500 font-semibold">Este mes</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold uppercase text-black">
            Productos más vendidos
          </h2>
        </div>

        {/* DERECHA */}
        <div className="flex items-center">
          <button className="bg-[#DB4444] text-white py-2 px-8 rounded-md hover:bg-[#C0392B] transition">
            Ver todos
          </button>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestSellingProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-white overflow-hidden shadow-sm hover:shadow-md transition min-h-[380px] flex flex-col"
          >
            {/* IMAGE WRAPPER */}
            <div className="relative h-[220px] lg:h-[240px] bg-[#F5F5F5] flex items-center justify-center overflow-hidden">
              {/* ACTIONS - solo visible al hover */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 z-10 transition-opacity duration-200">
                <button className="bg-white p-2 rounded-full shadow-md transition-all duration-200 hover:bg-[#DB4444] hover:text-white hover:scale-105">
                  <FiHeart size={16} />
                </button>
                <button className="bg-neutral-400 p-2 rounded-full shadow-md transition-all duration-200 hover:bg-[#DB4444] hover:text-white hover:scale-105">
                  <FiEye size={16} />
                </button>
              </div>

              {/* IMAGE */}
              <div className="relative w-[140px] h-[140px] lg:w-[160px] lg:h-[160px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* OVERLAY (opcional pero mejora UX) */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition duration-300" />
            </div>

            {/* INFO */}
            <div className="flex-1 p-3 md:p-4 flex flex-col">
              <h3 className="text-sm font-medium text-black line-clamp-2">
                {product.name}
              </h3>

              <div className="mt-2 flex items-center gap-2">
                <span className="text-red-500 font-bold text-sm md:text-base">
                  {formatPriceCLP(product.price)}
                </span>
              </div>

              {/* 👇 ESTO ES CLAVE */}
              <div className="mt-auto">
                <button className="w-full py-2 text-sm font-semibold rounded-md bg-black text-white hover:bg-[#DB4444] transition-colors duration-200">
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
