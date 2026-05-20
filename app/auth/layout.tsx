import ToastNotification from "@/src/shared/components/ui/ToastNotification";
import { getServerSession, hasRole } from "@/src/lib/auth-server";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (session?.user) {
    const role = (session.user as { role?: string | string[] | null }).role;

    if (hasRole(role, "admin")) {
      redirect("/dashboard/admin");
    }

    redirect("/dashboard/profile");
  }

  return (
    <>
      <main className="min-h-[calc(100dvh-160px)] p-0">
        {children}
        <ToastNotification />
      </main>
    </>
  );
}