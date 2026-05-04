"use client";

import { useStore } from "@/src/store";
import ProductDetails from "./ProducDetails";
import Heading from "@/src/shared/components/ui/typography/Heading";
import { formatPriceCLP } from "@/src/utils/formatPrice";
import { useMemo } from "react";
import Link from "next/link";

export default function CartView() {
  const cart = useStore((state) => state.cart);

  const total = useMemo(
    () =>
      cart.reduce((acc, item) => {
        const price = item.discountPrice ?? item.price;
        return acc + price * item.quantity;
      }, 0),
    [cart],
  );

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-white rounded-xl shadow-sm p-4 space-y-6">
        <Heading level={1} className="text-2xl font-semibold">
          Carrito de Compras
        </Heading>

        {cart.length === 0 ? (
          <div className="py-20 text-center border-2 border-dashed rounded-lg">
            <p className="text-gray-400">Tu carrito está vacío.</p>
          </div>
        ) : (
          <>
            {/* HEADER TABLA */}
            <div className="grid grid-cols-[80px_1fr_120px_140px_120px_40px] text-sm font-semibold text-gray-500 border-b pb-3">
              <span></span>
              <span>Producto</span>
              <span>Precio</span>
              <span>Cantidad</span>
              <span>Subtotal</span>
              <span></span>
            </div>

            {/* ITEMS */}
            <div className="divide-y">
              {cart.map((item) => (
                <ProductDetails key={item.id} item={item} />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 h-fit sticky top-24 border border-black/10">
        <Heading level={2} className="text-xl font-semibold mb-6 text-black">
          Resumen del carrito
        </Heading>

        <div className="space-y-5 text-sm">
          {/* SUBTOTAL */}
          <div className="flex justify-between items-center">
            <span className="text-black/80">Subtotal</span>
            <span className="font-semibold text-black">
              {formatPriceCLP(total)}
            </span>
          </div>

          {/* ENVÍO */}
          <div className="flex justify-between items-center">
            <span className="text-black/80">Envío</span>
            <span className="font-semibold text-green-700">Gratis</span>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-black/10 pt-4 flex justify-between items-center text-lg font-bold">
            <span className="text-black">Total</span>
            <span className="text-[#DB4444]">{formatPriceCLP(total)}</span>
          </div>
        </div>

        {/* CTA */}
        <Link
          href={cart.length > 0 ? "/checkout" : "#"}
          className={`
    w-full mt-6 text-center block
    py-4 rounded-lg font-semibold transition-all
    ${cart.length === 0
              ? "bg-gray-300 text-black/50 cursor-not-allowed"
              : "bg-[#DB4444] text-white hover:bg-[#b9322a]"
            }
  `}
        >
          Proceder al pago
        </Link>

        {/* CUPÓN */}
        <div className="mt-6 flex gap-2">
          <input
            type="text"
            placeholder="Código de cupón"
            className="
        flex-1
        border border-black/20
        rounded-lg px-3 py-2 text-sm
        text-black placeholder:text-black/40
        focus:outline-none
        focus:border-[#DB4444]
      "
          />

          <button
            className="
        bg-black text-white
        px-4 py-2 rounded-lg text-sm font-medium
        hover:bg-neutral-800
        transition
      "
          >
            Aplicar
          </button>
        </div>
      </div>
    </div>
  );
}
