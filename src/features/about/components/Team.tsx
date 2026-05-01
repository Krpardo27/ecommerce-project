"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { team } from "./data/team";

export default function Team() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "center",
      containScroll: "trimSnaps",
    },
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const update = useCallback(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", update);
    emblaApi.on("reInit", update);

    queueMicrotask(update);

    return () => {
      emblaApi.off("select", update);
      emblaApi.off("reInit", update);
    };
  }, [emblaApi, update]);

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="mb-10 max-w-xl">
          <span className="text-sm font-semibold text-[#DB4444]">Our Team</span>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-black">
            Meet our creative team
          </h2>

          <p className="mt-3 text-sm md:text-base text-gray-500">
            People behind the strategy, design and digital experiences.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4 py-4">
            {team.map((member, i) => (
              <div
                key={member.id}
                className="
                  pl-4
                  flex-[0_0_85%]
                  sm:flex-[0_0_48%]
                  lg:flex-[0_0_31%]
                  xl:flex-[0_0_24%]
                "
              >
                <motion.article
                  className="
                    h-full overflow-hidden rounded-2xl bg-white
                    border border-black/5 shadow-sm
                    transition duration-300 hover:-translate-y-1 hover:shadow-lg
                  "
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {/* IMAGE */}
                  <div className="relative h-[260px] sm:h-[280px] lg:h-[300px] bg-[#F5F5F5]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 48vw, 24vw"
                      className="object-contain object-bottom"
                      priority={i === 0}
                    />
                  </div>

                  {/* INFO */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-black">
                      {member.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">{member.role}</p>

                    {/* SOCIALS */}
                    <div className="mt-5 flex items-center gap-3">
                      {member.socials.twitter && (
                        <a
                          href={member.socials.twitter}
                          aria-label={`${member.name} Twitter`}
                          className="grid h-9 w-9 place-items-center rounded-full border border-black/10 text-gray-600 transition hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-white"
                        >
                          <FaTwitter size={15} />
                        </a>
                      )}

                      {member.socials.instagram && (
                        <a
                          href={member.socials.instagram}
                          aria-label={`${member.name} Instagram`}
                          className="grid h-9 w-9 place-items-center rounded-full border border-black/10 text-gray-600 transition hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-white"
                        >
                          <FaInstagram size={15} />
                        </a>
                      )}

                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          aria-label={`${member.name} LinkedIn`}
                          className="grid h-9 w-9 place-items-center rounded-full border border-black/10 text-gray-600 transition hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-white"
                        >
                          <FaLinkedin size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="mt-8 flex justify-center gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Ir al slide ${i + 1}`}
              className={`
                h-2.5 rounded-full transition-all duration-300
                ${i === selectedIndex
                  ? "w-8 bg-[#DB4444]"
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
