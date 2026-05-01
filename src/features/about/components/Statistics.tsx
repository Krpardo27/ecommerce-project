"use client";

import { FiUsers, FiShoppingBag, FiDollarSign, FiPackage } from "react-icons/fi";

const stats = [
  {
    id: 1,
    value: "10.5k",
    label: "Vendedores activos en nuestra plataforma",
    icon: FiUsers,
  },
  {
    id: 2,
    value: "33k",
    label: "Productos vendidos cada mes",
    icon: FiPackage,
  },
  {
    id: 3,
    value: "45.5k",
    label: "Clientes activos en nuestra tienda",
    icon: FiShoppingBag,
  },
  {
    id: 4,
    value: "25k",
    label: "Ventas brutas anuales",
    icon: FiDollarSign,
  },
];

export default function Statistics() {
  return (
    <section className="py-16 lg:py-32 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.id}
              className="
                group
                flex flex-col items-center text-center gap-4
                p-6 rounded-md border bg-white
                hover:shadow-md transition-all duration-300 hover:bg-[#DB4444] hover:text-white
              "
            >
              {/* ICON */}
              <div className="relative w-16 h-16 flex items-center justify-center">

                {/* HALO / ONDA */}
                <div
                  className="
      absolute inset-0 rounded-full
      bg-[#363738]/40
      scale-110
      opacity-60
      group-hover:bg-white/40 group-hover:opacity-80
      transition-all duration-300
    "
                />

                {/* CÍRCULO PRINCIPAL */}
                <div
                  className="
      relative w-14 h-14 flex items-center justify-center
      rounded-full bg-black
      group-hover:bg-white
      transition-colors
    "
                >
                  <Icon className="text-xl text-white group-hover:text-black transition-colors" />
                </div>

              </div>

              {/* VALUE */}
              <span className="text-2xl md:text-3xl font-bold text-black group-hover:text-white">
                {stat.value}
              </span>

              {/* LABEL */}
              <p className="text-sm text-gray-500 leading-snug group-hover:text-gray-200">
                {stat.label}
              </p>
            </div>
          );
        })}

      </div>
    </section>
  );
}