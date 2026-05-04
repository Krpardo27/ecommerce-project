"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Product } from "@/src/generated/prisma/client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Countdown from "react-countdown";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductCard from "@/src/features/products/components/ProductCard";

type Props = {
  products: Product[];
};

export default function FlashSales({ products }: Props) {
  const flashProducts = useMemo(
    () =>
      products.filter(
        (product) =>
          product.discountPrice !== null &&
          product.discountPrice < product.price
      ),
    [products]
  );

  console.log('products', products);

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

    emblaApi.on("select", updateSnaps);
    emblaApi.on("reInit", updateSnaps);
    updateSnaps();

    return () => {
      emblaApi.off("select", updateSnaps);
      emblaApi.off("reInit", updateSnaps);
    };
  }, [emblaApi]);

  if (flashProducts.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto py-20 space-y-10">
      {/* HEADER */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 relative px-2">
          <div className="w-[30px] h-[40px] bg-[#DB4444] rounded-sm" />
          <span className="text-red-500 font-semibold">Hoy</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <h2 className="text-2xl ml-4 lg:ml-0 md:text-3xl font-bold uppercase text-black">
              Ofertas Flash
            </h2>

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
          </div>

          <div className="flex gap-2 ml-auto">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="w-10 h-10 rounded-full border bg-[#F5F5F5] flex items-center justify-center hover:bg-[#DB4444] hover:text-white transition"
            >
              <FaChevronLeft className="w-4 h-4 text-black hover:text-white" />
            </button>

            <button
              onClick={() => emblaApi?.scrollNext()}
              className="w-10 h-10 rounded-full border bg-[#F5F5F5] flex items-center justify-center hover:bg-[#DB4444] transition"
            >
              <FaChevronRight className="w-4 h-4 text-black hover:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* CARRUSEL */}
      <div className="overflow-hidden px-3 md:px-4" ref={emblaRef}>
        <div className="flex -ml-3 md:-ml-4">
          {flashProducts.map((product) => (
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
              <ProductCard product={product} variant="flash" />
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`
                h-2.5 rounded-full transition-all duration-300
                ${index === selectedIndex
                  ? "w-6 bg-black"
                  : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}