"use server";

import z from "zod";
import { prisma } from "@/src/lib/prisma";
import { requireAdmin } from "@/src/lib/auth-server";

const PromoteToAdminSchema = z.object({
  email: z.email({ message: "Email inválido" }).toLowerCase().trim(),
});

type PromoteToAdminInput = z.infer<typeof PromoteToAdminSchema>;

export async function promoteUserToAdminAction(input: PromoteToAdminInput) {
  await requireAdmin();

  const parsed = PromoteToAdminSchema.safeParse(input);

  if (!parsed.success) {
    return {
      error: "Email inválido",
      success: "",
    };
  }

  const user = await prisma.user.findUnique({
    where: { email: parsed.data.email },
    select: { id: true, role: true },
  });

  if (!user) {
    return {
      error: "No existe un usuario con ese email",
      success: "",
    };
  }

  if (user.role === "admin") {
    return {
      error: "",
      success: "El usuario ya tiene rol admin",
    };
  }

  await prisma.user.update({
    where: { id: user.id },
    data: { role: "admin" },
  });

  return {
    error: "",
    success: "Rol admin asignado correctamente",
  };
}