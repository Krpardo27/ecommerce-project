import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "./auth";

type UserRole = string | string[] | null | undefined;

export function hasRole(role: UserRole, expectedRole: string) {
  if (!role) return false;

  const roles = Array.isArray(role)
    ? role
    : role
        .split(",")
        .map((r) => r.trim())
        .filter(Boolean);

  return roles.includes(expectedRole);
}

export async function getServerSession() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session;
}

export async function requireAuth() {
  const session = await getServerSession();

  return {
    session,
    isAuth: session ? true : false,
  };
}

export async function requireAdmin() {
  const { session } = await requireAuth();

  if (!session?.user) {
    redirect("/auth/login");
  }

  const role = (session.user as { role?: UserRole }).role;

  if (!hasRole(role, "admin")) {
    redirect("/admin");
  }

  return session;
}

