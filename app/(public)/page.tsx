import BestSellingProducts from "@/src/features/home/components/Best-Selling/BestSellingProducts";
import CategoriesSection from "@/src/features/home/components/Categories/CategoriesSection";
import FlashSales from "@/src/features/home/components/Flash-sales/FlashSales";
import Hero from "@/src/features/home/components/Hero/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FlashSales />
      <BestSellingProducts />
      <CategoriesSection />
    </>
  );
}