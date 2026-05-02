import Header from "@/src/shared/components/layout/Header/Header";
import Breadcrumbs from "@/src/shared/components/ui/Breadcrumbs";

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-6">
        <div className="flex gap-8">
          <aside className="w-64 hidden lg:block">
            Filtros / categorías
          </aside>
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}