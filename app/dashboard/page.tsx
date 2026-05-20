import { auth } from "@/src/lib/auth";
import { hasRole } from "@/src/lib/auth-server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/auth/login");
  }

  const role = (session?.user as { role?: string | string[] | null } | undefined)
    ?.role;

  if (hasRole(role, "admin")) {
    redirect("/dashboard/admin");
  }

  redirect("/dashboard/profile");
}