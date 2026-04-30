"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import { formatPriceCLP } from "@/src/utils/formatPrice";
import { flashSales } from "../data/flashsales";
import Countdown from "react-countdown";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function FlashSales() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [targetDate] = useState(() => Date.now() + 1000 * 60 * 60 * 24);

  useEffect(() => {
    if (!emblaApi) return;

    const updateSnaps = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    // 👇 eventos correctos
    emblaApi.on("select", updateSnaps);
    emblaApi.on("reInit", updateSnaps);

    // 👇 inicialización segura (NO problemática)
    updateSnaps();

    return () => {
      emblaApi.off("select", updateSnaps);
      emblaApi.off("reInit", updateSnaps);
    };
  }, [emblaApi]);

  return (
    <section className="container mx-auto py-20 space-y-10">
      {/* HEADER */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 relative px-2">
          <div className="w-[30px] h-[40px] bg-[#DB4444] rounded-sm" />
          <span className="text-red-500 font-semibold">Hoy</span>
        </div>

        <div
          className="
    flex flex-col
    md:flex-row
    md:items-center
    justify-between
    gap-4
  "
        >
          {/* LEFT: título + timer */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">

            <h2 className="text-2xl ml-4 lg:ml-0 md:text-3xl font-bold uppercase text-black">
              Ofertas Flash
            </h2>

            {targetDate ? (
              <Countdown
                date={targetDate}
                renderer={({ days, hours, minutes, seconds }) => (
                  <div className="flex items-center gap-2 md:gap-3 text-gray-700">
                    {[days, hours, minutes, seconds].map((val, i) => (
                      <React.Fragment key={i}>
                        <div className="flex flex-col items-center min-w-[50px]">
                          <span className="text-base md:text-lg font-bold">
                            {String(val).padStart(2, "0")}
                          </span>
                          <span className="text-[10px] md:text-xs">
                            {["Días", "Horas", "Minutos", "Segundos"][i]}
                          </span>
                        </div>

                        {i < 3 && (
                          <span className="text-base md:text-lg font-bold text-[#E07575]">
                            :
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              />
            ) : (
              <div className="h-10 w-40 md:w-48 bg-gray-100 animate-pulse rounded" />
            )}
          </div>

          {/* RIGHT: flechas */}
          <div className="flex gap-2 ml-auto">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="
        w-10 h-10 rounded-full border bg-[#F5F5F5]
        flex items-center justify-center
        hover:bg-[#DB4444] hover:text-white transition
      "
            >
              <FaChevronLeft className="w-4 h-4 text-black hover:text-white" />
            </button>

            <button
              onClick={() => emblaApi?.scrollNext()}
              className="
        w-10 h-10 rounded-full border bg-[#F5F5F5]
        flex items-center justify-center
        hover:bg-[#DB4444] transition
      "
            >
              <FaChevronRight className="w-4 h-4 text-black hover:text-white" />
            </button>
          </div>
        </div>

      </div>

      {/* CARRUSEL */}
      <div className="overflow-hidden px-3 md:px-4" ref={emblaRef}>
        <div className="flex -ml-3 md:-ml-4 gap-3 md:gap-4">
          {flashSales.map((product) => {
            const discount = Math.round(
              ((product.price - product.discountPrice) / product.price) * 100
            );

            return (
              <div
                key={product.id}
                className="
            pl-3 md:pl-4
            flex-[0_0_85%]
            sm:flex-[0_0_48%]
            md:flex-[0_0_32%]
            lg:flex-[0_0_24%]
          "
              >
                {/* CARD */}
                <div className="group h-[350px] rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden">

                  {/* IMAGE */}
                  <div className="relative h-[200px] md:h-[220px] bg-neutral-100 flex items-center justify-center">
                    <div className="relative w-[140px] h-[140px] md:w-[160px] md:h-[160px]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-md font-semibold">
                      -{discount}%
                    </span>
                  </div>

                  {/* INFO */}
                  <div className="flex-1 p-3 md:p-4 flex flex-col justify-between">

                    <h3 className="text-sm font-medium text-black line-clamp-2">
                      {product.name}
                    </h3>

                    <div className="flex flex-col gap-2">

                      {/* PRICE */}
                      <div className="flex items-center gap-2">
                        <span className="text-red-500 font-bold text-sm md:text-base">
                          {formatPriceCLP(product.discountPrice)}
                        </span>

                        <span className="text-xs line-through text-gray-400">
                          {formatPriceCLP(product.price)}
                        </span>
                      </div>

                      {/* BUTTON */}
                      <button
                        className="
                    w-full
                    py-2
                    text-sm font-semibold
                    rounded-md
                    bg-black text-white
                    transition-all duration-300

                    opacity-100 md:opacity-0
                    translate-y-0 md:translate-y-2
                    md:group-hover:opacity-100
                    md:group-hover:translate-y-0
                  "
                      >
                        Añadir al carrito
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`
          h-2.5 rounded-full transition-all duration-300
          ${index === selectedIndex
                  ? "w-6 bg-black"
                  : "w-2.5 bg-gray-300 hover:bg-gray-400"}
        `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
