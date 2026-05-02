"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  ForgotPasswordInput,
  ForgotPasswordSchema,
} from "../schemas/authSchema";
import FormErrors from "@/src/shared/components/forms/FormErrors";
import { forgotPasswordAction } from "../actions/auth-actions";
import {
  Form,
  FormInput,
  FormLabel,
  FormSubmit,
} from "@/src/shared/components/forms";
import { toast } from "react-toastify";
import Link from "next/link";
import { FiLogIn, FiUserPlus } from "react-icons/fi";

export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ForgotPasswordSchema),
    mode: "all",
  });

  const onSubmit = async (data: ForgotPasswordInput) => {
    const { error, success } = await forgotPasswordAction(data);

    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success(success);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel>Email:</FormLabel>
      <FormInput
        type="email"
        id="email"
        placeholder="Ingresa tu email"
        {...register("email")}
      />
      {errors.email && <FormErrors>{errors.email.message}</FormErrors>}
      <FormSubmit value="Enviar instrucciones" />

        <nav className="mt-6 flex justify-between items-center">
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
            <FiLogIn size={16} />
            <span>Volver a iniciar sesión</span>
          </Link>

          <Link
            href="/auth/create-account"
            className="
              flex items-center justify-center gap-2
              w-full rounded-lg
              py-2 text-sm text-zinc-500
              hover:text-zinc-800
              transition
            "
          >
            <FiUserPlus size={15} />
            <span>¿No tienes cuenta? Crear cuenta</span>
          </Link>
        </nav>
    </Form>
  );
}
