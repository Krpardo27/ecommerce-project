import CheckoutContainer from "@/src/features/checkout/components/CheckoutContainer";
import Heading from "@/src/shared/components/ui/typography/Heading";

export default function CheckoutPage() {
  return (
    <section className="min-h-dvh">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Heading level={1}>Detalles de la Orden</Heading>
          <p className="text-sm text-zinc-500">
            Completa tus datos para finalizar la compra
          </p>
        </div>
        {/* CONTENT */}
        <CheckoutContainer />
      </div>
    </section>
  );
}