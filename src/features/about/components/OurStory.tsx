import Image from "next/image";
import Heading from "../../../shared/components/ui/typography/Heading";

export default function OurStory() {
  return (
    <section className="relative py-20 overflow-hidden lg:mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:mt-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <Heading level={1} className="text-4xl md:text-5xl font-bold">
              Nuestra Historia
            </Heading>
            <p className="text-gray-700 leading-relaxed">
              Lanzada en 2015, Exclusive es el principal mercado de compras
              online del sur de Asia con presencia activa en Bangladesh.
              Respaldada por una amplia gama de soluciones personalizadas de
              marketing, datos y servicios, Exclusive cuenta con 10,500
              vendedores y 300 marcas, y atiende a 3 millones de clientes en
              toda la región.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Exclusive tiene más de 1 millón de productos para ofrecer, y está
              creciendo muy rápidamente. Exclusive ofrece una variada selección
              en categorías que van desde consumo masivo hasta productos de
              última tecnología.
            </p>
            {/* Imagen solo para móviles */}
            <div className="block md:hidden relative w-full aspect-[4/3]">
              <Image
                src="/images/about/about-hero.jpg"
                fill
                className="object-cover rounded-lg"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
      {/* Imagen para escritorio */}
      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[45%] lg:w-[45%]">
        <div className="relative w-full aspect-square">
          <Image
            src="/images/about/about-hero.jpg"
            alt="Exclusive marketplace"
            fill
            className="object-contain object-bottom"
            sizes="45vw"
          />
        </div>
      </div>
    </section>
  );
}
