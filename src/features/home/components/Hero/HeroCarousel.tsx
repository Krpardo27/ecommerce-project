"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

const slides = [
  { id: 1, title: "Colección Verano", image: "/images/hero/hero-1.png" },
  { id: 2, title: "Nuevas Ofertas", image: "/images/hero/hero-2.png" },
  { id: 3, title: "Descuentos Exclusivos", image: "/images/hero/hero-3.png" },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const [selectedIndex, setSelectedIndex] = useState(0);

  // 👉 actualizar índice activo
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // 👉 navegación por dot
  const scrollTo = (index: number) => {
    emblaApi?.scrollTo(index);
  };

  return (
    <div className="relative overflow-hidden h-[400px]" ref={emblaRef}>
      {/* Slides */}
      <div className="flex h-full">
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-full relative">

            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={slide.id === 1}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h2 className="text-3xl font-bold text-white">
                {slide.title}
              </h2>
            </div>

          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`
              w-3 h-3 transition-all rounded-full 
              ${index === selectedIndex
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white"}
            `}
          />
        ))}
      </div>
    </div>
  );
}