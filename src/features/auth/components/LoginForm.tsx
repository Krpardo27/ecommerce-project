"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
import { SignInInput, SignInSchema } from "../schemas/authSchema";
import { signInAction } from "../actions/auth-actions";
import { Form, FormInput, FormLabel, FormSubmit } from "@/src/shared/components/forms";
import FormErrors from "@/src/shared/components/forms/FormErrors";
import Link from "next/link";
import { FiKey, FiUserPlus } from "react-icons/fi";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignInSchema),
    mode: "all",
  });

  const onSubmit = async (data: SignInInput) => {
    const { success, error } = await signInAction(data);

    if (error) {
      toast.error(error);
    }

    if (success) {
      toast.success(success);
      redirect("/");
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto">
      <div className="bg-white space-y-4">
        {/* EMAIL */}
        <div className="space-y-1">
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput
            type="email"
            id="email"
            placeholder="Ingresa tu Email"
            {...register("email")}
          />
          {errors.email && <FormErrors>{errors.email.message}</FormErrors>}
        </div>

        {/* PASSWORD */}
        <div className="space-y-1">
          <FormLabel htmlFor="password">Contraseña</FormLabel>
          <FormInput
            type="password"
            id="password"
            placeholder="Ingresa tu contraseña"
            {...register("password")}
          />
          {errors.password && <FormErrors>{errors.password.message}</FormErrors>}
        </div>

        {/* ACTION ROW */}
        <div className="flex items-center justify-between text-sm gap-3">
          <FormSubmit value="Iniciar Sesión" />
          <Link
            href="/auth/forgot-password"
            className="flex items-center gap-1 text-zinc-500 hover:text-zinc-800 transition"
          >
            <FiKey size={14} />
            <span>¿Olvidaste tu contraseña?</span>
          </Link>
        </div>
      </div>
      <nav>
        <Link
          href="/auth/create-account"
          className="
        flex items-center justify-center gap-2
        w-full rounded-lg border border-zinc-200
        py-3 text-sm font-medium text-zinc-800
        bg-white hover:bg-zinc-50
        transition
      "
        >
          <FiUserPlus size={16} />
          <span>¿No tienes cuenta? Crear cuenta</span>
        </Link>
      </nav>

    </Form>
  );
}
