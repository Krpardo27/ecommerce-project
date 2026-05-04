"use client";

import { FormSubmit } from "@/src/shared/components/forms";
import { useStore } from "@/src/store";
import { formatPriceCLP } from "@/src/utils/formatPrice";
import Image from "next/image";
import Link from "next/link";
import { useFormContext } from "react-hook-form";
import { CheckoutInput } from "../../auth/schemas/authSchema";
import clsx from "clsx";

export default function CheckoutSummary() {
  const {
    formState: { isValid, isSubmitting },
  } = useFormContext<CheckoutInput>();

  const cart = useStore((state) => state.cart);

  const subtotal = cart.reduce((acc, item) => {
    const price = item.discountPrice ?? item.price;
    return acc + price * item.quantity;
  }, 0);

  const shipping = 0;
  const total = subtotal + shipping;

  const disabled = !isValid || isSubmitting;

  if (cart.length === 0) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md">
        <p className="text-black/60 text-sm">Tu carrito está vacío.</p>
        <Link
          href="/cart"
          className="text-sm text-[#DB4444] hover:underline mt-2 inline-block"
        >
          Volver al carrito
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md h-fit sticky top-24 border border-black/10">
      {/* HEADER */}
      <h3 className="text-lg font-semibold text-black mb-5">
        Resumen de la orden
      </h3>

      {/* ITEMS */}
      <div className="space-y-4">
        {cart.map((item) => {
          const price = item.discountPrice ?? item.price;
          const itemTotal = price * item.quantity;

          return (
            <div key={item.id} className="flex items-center gap-3">
              {/* IMAGE */}
              <div className="relative w-14 h-14 bg-[#F5F5F5] rounded">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain p-1"
                />
              </div>

              {/* INFO */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-black line-clamp-1">
                  {item.name}
                </p>

                <p className="text-xs text-black/60">
                  {item.quantity} × {formatPriceCLP(price)}
                </p>
              </div>

              {/* SUBTOTAL */}
              <p className="text-sm font-semibold text-black">
                {formatPriceCLP(itemTotal)}
              </p>
            </div>
          );
        })}
      </div>

      {/* TOTALS */}
      <div className="border-t border-black/10 mt-6 pt-4 space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-black/70">Subtotal</span>
          <span className="font-medium text-black">
            {formatPriceCLP(subtotal)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-black/70">Envío</span>
          <span className="font-medium text-green-700">Gratis</span>
        </div>

        <div className="flex justify-between text-base font-bold pt-2 border-t border-black/10">
          <span>Total</span>
          <span className="text-[#DB4444]">{formatPriceCLP(total)}</span>
        </div>
      </div>

      {/* BACK TO CART */}
      <div className="flex justify-between items-center mt-4 py-2">
        <Link
          href="/cart"
          className="text-sm text-[#DB4444] hover:underline mt-6 inline-block"
        >
          ← Volver al carrito
        </Link>
        {/* CTA */}
        <FormSubmit
          type="submit"
          value="Continuar al pago"
          disabled={isSubmitting}
          className={clsx(
            "w-full mt-6",
            disabled && "opacity-50 cursor-not-allowed",
          )}
        />
      </div>
    </div>
  );
}
