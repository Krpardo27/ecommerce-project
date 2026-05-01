import Categories from "./Categories";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto flex gap-12">
      <Categories />
      <div className="flex-1 lg:mt-12">
        <HeroCarousel />
      </div>
    </section>
  );
}