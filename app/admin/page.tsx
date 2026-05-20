import Link from "next/link";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "@/src/lib/auth";
import { hasRole } from "@/src/lib/auth-server";

export default async function AdminPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/auth/login");
  }

  const role = (session.user as { role?: string | string[] | null }).role;

  if (hasRole(role, "admin")) {
    redirect("/dashboard/admin");
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-14">
      <h1 className="text-2xl font-bold mb-3">Zona Admin</h1>
      <p className="text-zinc-600 mb-6">
        Tu cuenta no tiene permisos de administrador. Si crees que esto es un
        error, solicita acceso a un admin del sistema.
      </p>

      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="px-4 py-2 rounded-lg border border-zinc-300 hover:bg-zinc-50"
        >
          Ir al inicio
        </Link>
        <Link
          href="/dashboard/profile"
          className="px-4 py-2 rounded-lg bg-black text-white hover:opacity-90"
        >
          Volver al perfil
        </Link>
      </div>
    </main>
  );
}