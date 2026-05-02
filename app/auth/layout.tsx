import Footer from "@/src/shared/components/layout/Footer/Footer";
import Header from "@/src/shared/components/layout/Header/Header";
import ToastNotification from "@/src/shared/components/ui/ToastNotification";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100dvh-160px)] p-0">
        {children}
        <ToastNotification />
      </main>

      <Footer />
    </>
  );
}