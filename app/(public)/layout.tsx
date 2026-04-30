import { Header } from "@/src/features/shared/components/layout/Header/Header";
import { ReactNode } from "react";

export default function PublicLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white container mx-auto">{children}</main>
    </>
  );
}