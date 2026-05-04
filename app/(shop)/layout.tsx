import HeaderMinimal from "@/src/shared/components/layout/Header/HeaderMinimal";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderMinimal />
      <main className="min-h-dvh bg-[#f5f5f5]">{children}</main>
    </>
  );
}