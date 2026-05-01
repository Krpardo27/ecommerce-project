import { ReactNode } from "react";
import Footer from "@/src/shared/components/layout/Footer/Footer";
import Header from "@/src/shared/components/layout/Header/Header";
import Breadcrumbs from "@/src/shared/components/ui/Breadcrumbs";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8 px-4">
        <Breadcrumbs />
        {children}
      </main>
      <Footer />
    </div>
  );
}
