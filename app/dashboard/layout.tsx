// app/(dashboard)/layout.tsx
import { auth } from "@/src/lib/auth";
import { hasRole } from "@/src/lib/auth-server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import AdminPanel from "@/src/shared/components/admin/AdminPanel";
import UserPanel from "@/src/shared/components/user/UserPanel";

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

  const role = (session.user as { role?: string | string[] | null }).role;

  if (hasRole(role, "admin")) {
    return <AdminPanel>{children}</AdminPanel>;
  }

  return <UserPanel>{children}</UserPanel>;
}
