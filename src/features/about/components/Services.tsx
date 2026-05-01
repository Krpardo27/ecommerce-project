"use client";

import { motion } from "framer-motion";
import { FiTruck, FiHeadphones, FiShield } from "react-icons/fi";

const services = [
  {
    id: 1,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
    icon: FiTruck,
  },
  {
    id: 2,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
    icon: FiHeadphones,
  },
  {
    id: 3,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
    icon: FiShield,
  },
];

export default function Services() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {services.map((service, i) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.id}
              className="
                group
                flex flex-col items-center text-center gap-4
                p-6
              "
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              {/* ICON */}
              <motion.div
                className="relative w-16 h-16 flex items-center justify-center"
                whileHover={{ rotate: 8 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
              >
                {/* HALO */}
                <div
                  className="
                    absolute inset-0 rounded-full
                    bg-[#363738]/20 scale-110
                  "
                />

                {/* CIRCLE */}
                <div
                  className="
                    relative w-14 h-14 flex items-center justify-center
                    rounded-full bg-black
                  "
                >
                  <Icon className="text-xl text-white" />
                </div>
              </motion.div>

              {/* TITLE */}
              <h3 className="text-base font-semibold tracking-wide text-black uppercase">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-500 max-w-[240px]">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
