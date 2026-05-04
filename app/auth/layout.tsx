import ToastNotification from "@/src/shared/components/ui/ToastNotification";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="min-h-[calc(100dvh-160px)] p-0">
        {children}
        <ToastNotification />
      </main>
    </>
  );
}