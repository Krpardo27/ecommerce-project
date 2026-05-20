import { requireAdmin } from "@/src/lib/auth-server";

export default async function DashboardAdminPage() {
  await requireAdmin();

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold">AdminPage</h1>
      <p className="text-zinc-600 mt-2">
        Panel de administración habilitado por rol.
      </p>
    </main>
  );
}