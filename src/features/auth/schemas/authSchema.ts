import { isValidRUT } from "@/src/utils/formatRUT";
import z from "zod";

export const BaseAuthSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
    .max(50, { message: "El nombre es demasiado largo" })
    .regex(/^[a-zA-ZáéíóúñÑ\s]+$/, {
      message: "Solo letras y espacios",
    }),
  email: z.email({ message: "El email no es válido" }).toLowerCase().trim(),
  password: z
    .string()
    .trim()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
  confirmPassword: z
    .string()
    .trim()
    .min(1, { message: "El password de confirmación no puede ir vacío" }),
  newPassword: z
    .string()
    .trim()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
  currentPassword: z
    .string()
    .trim()
    .min(1, { message: "La contraseña debe tener al menos 8 caracteres" }),
});

export const SignUpSchema = BaseAuthSchema.pick({
  name: true,
  email: true,
  password: true,
  confirmPassword: true,
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});

export const SignInSchema = BaseAuthSchema.pick({
  email: true,
}).extend({
  password: z
    .string()
    .trim()
    .min(1, { message: "La contraseña no puede ir vacía" }),
});

export const CheckoutSchema = z.object({
  email: z.email({ message: "Email inválido" }),
  phone: z
    .string()
    .trim()
    .min(8, { message: "Teléfono inválido" })
    .regex(/^\+?56?\s?9\d{8}$/, {
      message: "Formato inválido (Ej: +56 9 12345678)",
    }),

  receiverName: z.string().min(2, "Nombre requerido"),
  receiverLastName: z.string().min(2, "Apellido requerido"),
  rut: z
    .string()
    .min(8, "RUT inválido")
    .regex(/^\d{7,8}-[0-9kK]$/, "Formato inválido")
    .refine((value) => isValidRUT(value), {
      message: "RUT inválido",
    }),

  region: z.string().min(1, "Selecciona una región"),
  commune: z.string().min(1, "Selecciona una comuna"),

  street: z.string().min(3, "Calle requerida"),
  number: z.string().min(1, "Número requerido"),

  apartment: z.string().optional(),
  notes: z.string().optional(),
});

export const OrderSchema = z.object({
  email: z.string(),
  phone: z.string(),

  receiverName: z.string(),
  receiverLastName: z.string(),
  rut: z.string(),

  region: z.string(),
  commune: z.string(),
  street: z.string(),
  number: z.string(),
  apartment: z.string().optional(),

  items: z.array(
    z.object({
      productId: z.number(),
      quantity: z.number().min(1),
    }),
  ),

  subtotal: z.number(),
  total: z.number(),

  status: z.enum(["pending", "paid", "cancelled"]).default("pending"),
});
export const ForgotPasswordSchema = BaseAuthSchema.pick({
  email: true,
});

export const SetPasswordSchema = BaseAuthSchema.pick({
  newPassword: true,
  confirmPassword: true,
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});

export const CheckPasswordSchema = z.object({
  password: z.string().min(1, { error: "La contraseña no debe ir vacía" }),
});

export const ChangePasswordSchema = BaseAuthSchema.pick({
  currentPassword: true,
  newPassword: true,
  confirmPassword: true,
}).refine((data) => data.newPassword === data.confirmPassword, {
  error: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});

export type SignUpInput = z.infer<typeof SignUpSchema>;
export type SignInInput = z.infer<typeof SignInSchema>;
export type ForgotPasswordInput = z.infer<typeof ForgotPasswordSchema>;
export type SetPasswordInput = z.infer<typeof SetPasswordSchema>;
export type ChangePasswordInput = z.infer<typeof ChangePasswordSchema>;
export type CheckoutInput = z.infer<typeof CheckoutSchema>;
export type OrderSchema = z.infer<typeof OrderSchema>;
