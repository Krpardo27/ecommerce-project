import Footer from "@/src/shared/components/layout/Footer/Footer";
import Header from "@/src/shared/components/layout/Header/Header";
import Breadcrumbs from "@/src/shared/components/ui/Breadcrumbs";
import { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen ">
        <Breadcrumbs />
        {children}
      </main>
      <Footer />
    </>
  );
}
