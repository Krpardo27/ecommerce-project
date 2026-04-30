"use client";

import useEmblaCarousel from "embla-carousel-react";
import { categories } from "./categories";
import {
  FaMobileAlt,
  FaLaptop,
  FaClock,
  FaCamera,
  FaHeadphones,
  FaGamepad,
  FaTv,
  FaPlug,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const iconMap = [
  FaMobileAlt,
  FaLaptop,
  FaClock,
  FaCamera,
  FaHeadphones,
  FaGamepad,
  FaTv,
  FaPlug,
];

export default function CategoriesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    breakpoints: {
      "(max-width: 767px)": { align: "center" },
    },
  });

  return (
    <section className="container mx-auto py-12 space-y-6">
      <div className="flex flex-col gap-3">
        {/* TOP LABEL */}
        <div className="flex items-center gap-3 relative px-2">
          <div className="w-[30px] h-[40px] bg-[#DB4444] rounded-sm" />
          <span className="text-red-500 font-semibold">Categorías</span>
        </div>

        {/* TITLE + ARROWS */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-2xl ml-4 lg:ml-0 md:text-3xl font-bold uppercase text-black">
            Busca por categoría
          </h2>

          {/* ARROWS */}
          <div className="flex gap-2 ml-4 md:ml-0">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="
          w-10 h-10
          rounded-full
          border bg-[#F5F5F5]
          flex items-center justify-center
          hover:bg-[#DB4444] hover:text-white
          transition
        "
            >
              <FaChevronLeft className="w-4 h-4 text-black hover:text-white" />
            </button>

            <button
              onClick={() => emblaApi?.scrollNext()}
              className="
          w-10 h-10
          rounded-full
          border bg-[#F5F5F5]
          flex items-center justify-center
          hover:bg-[#DB4444] 
          transition
        "
            >
              <FaChevronRight className="w-4 h-4 text-black hover:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* CARRUSEL */}
      <div className="overflow-hidden px-3 md:px-4" ref={emblaRef}>
        <div className="flex -ml-3 md:-ml-4">
          {categories.map((cat, i) => {
            const Icon = iconMap[i];

            return (
              <div
                key={cat.id}
                className="
  pl-3 md:pl-4
  flex-[0_0_70%]
  sm:flex-[0_0_40%]
  md:flex-[0_0_25%]
  lg:flex-[0_0_20%] 
"
              >
                <div
                  className="
                    group
                    h-[145px]
                    flex flex-col items-center justify-center
                    gap-3
                    rounded-xl
                    border bg-[#F5F5F5]
                    hover:bg-[#DB4444] 
                    hover:shadow-md
                    transition-all duration-300
                    cursor-pointer
                    group-hover:text-white
                  "
                >
                  <Icon
                    className="
                      text-2xl
                      text-gray-700
                      transition-transform duration-300
                      group-hover:scale-110
                      group-hover:text-white
                    "
                  />

                  <span className="text-sm font-medium text-gray-700 text-center group-hover:text-white">
                    {cat.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
