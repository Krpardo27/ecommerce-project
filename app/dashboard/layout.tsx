// app/(dashboard)/layout.tsx
import { auth } from "@/src/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import AdminPanel from "@/src/shared/components/admin/AdminPanel";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/auth/login");
  }

  return <AdminPanel>{children}</AdminPanel>;
}
