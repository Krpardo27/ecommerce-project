"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpInput, SignUpSchema } from "../schemas/authSchema";
import FormErrors from "@/src/shared/components/forms/FormErrors";
import { signUpAction } from "../actions/auth-actions";
import {
  Form,
  FormInput,
  FormLabel,
  FormSubmit,
} from "@/src/shared/components/forms";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiKey, FiUserPlus } from "react-icons/fi";

export default function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignUpInput>({
    resolver: zodResolver(SignUpSchema),
    mode: "onBlur",
  });

  const onSubmit = async (values: SignUpInput) => {
    try {
      const { error, success } = await signUpAction(values);

      if (error) {
        toast.error(error);
        return;
      }

      if (success) {
        toast.success("¡Cuenta creada! Por favor verifica tu email.");
        reset();
        setTimeout(() => {
          router.push("/auth/login");
        }, 3000);
      }
      console.log(success);
    } catch (err) {
      toast.error("Ocurrió un error inesperado. Inténtalo de nuevo.");
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ marginBottom: "1rem" }}>
        <FormLabel htmlFor="name">Nombre completo</FormLabel>
        <FormInput
          type="text"
          id="name"
          placeholder="Ej. Juan Pérez"
          {...register("name")}
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && <FormErrors>{errors.name.message}</FormErrors>}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <FormLabel htmlFor="email">Correo electrónico</FormLabel>
        <FormInput
          type="email"
          id="email"
          placeholder="tu@email.com"
          {...register("email")}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <FormErrors>{errors.email.message}</FormErrors>}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <FormLabel htmlFor="password">Contraseña</FormLabel>
        <FormInput
          type="password"
          id="password"
          placeholder="Mínimo 8 caracteres"
          {...register("password")}
          aria-invalid={errors.password ? "true" : "false"}
        />
        {errors.password && <FormErrors>{errors.password.message}</FormErrors>}
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <FormLabel htmlFor="confirmPassword">Confirmar contraseña</FormLabel>
        <FormInput
          type="password"
          id="confirmPassword"
          placeholder="Repite tu contraseña"
          {...register("confirmPassword")}
          aria-invalid={errors.confirmPassword ? "true" : "false"}
        />
        {errors.confirmPassword && (
          <FormErrors>{errors.confirmPassword.message}</FormErrors>
        )}
      </div>

      <div className="flex items-center justify-between text-sm gap-3">
        <FormSubmit
          type="submit"
          value={isSubmitting ? "Creando cuenta..." : "Crear cuenta"}
          disabled={isSubmitting} 
        />
        <Link
          href="/auth/forgot-password"
          className="flex items-center gap-1 text-zinc-500 hover:text-zinc-800 transition"
        >
          <FiKey size={14} />
          <span>¿Olvidaste tu contraseña?</span>
        </Link>
      </div>

      <nav>
        <Link
          href="/auth/login"
          className="
        flex items-center justify-center gap-2
        w-full rounded-lg border border-zinc-200
        py-3 text-sm font-medium text-zinc-800
        bg-white hover:bg-zinc-50
        transition
      "
        >
          <FiUserPlus size={16} />
          <span>¿Ya tienes una cuenta? Inicia sesión</span>
        </Link>
      </nav>
    </Form>
  );
}
