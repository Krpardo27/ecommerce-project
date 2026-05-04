import BestSellingProducts from "@/src/features/home/components/Best-Selling/BestSellingProducts";
import CategoriesSection from "@/src/features/home/components/Categories/CategoriesSection";
import FlashSales from "@/src/features/home/components/Flash-sales/FlashSales";
import Hero from "@/src/features/home/components/Hero/Hero";
import { prisma } from "@/src/lib/prisma";

export default async function HomePage() {
  const products = await prisma.product.findMany();

  const bestSellingProducts = products.slice(0, 4); 

  return (
    <>
      <Hero />
      <FlashSales products={products} />
      <BestSellingProducts products={bestSellingProducts} />
      <CategoriesSection />
    </>
  );
}