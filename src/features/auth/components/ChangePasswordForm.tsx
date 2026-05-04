"use client";

import {
  Form,
  FormInput,
  FormLabel,
  FormSubmit,
} from "@/src/shared/components/forms";
import FormErrors from "@/src/shared/components/forms/FormErrors";
import Heading from "@/src/shared/components/ui/typography/Heading";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  ChangePasswordInput,
  ChangePasswordSchema,
} from "../schemas/authSchema";
import { changePasswordAction } from "../actions/auth-actions";
import { toast } from "react-toastify";

export default function ChangePasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(ChangePasswordSchema),
    mode: "all",
  });

  const onSubmit = async (data: ChangePasswordInput) => {
    const { error, success } = await changePasswordAction(data);

    if (error) toast.error(error);

    if (success) {
      toast.success(success);
      reset();
    }
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md mx-auto space-y-6"
    >
      {/* HEADER */}
      <div className="space-y-1">
        <Heading level={1}>Cambiar contraseña</Heading>
        <p className="text-sm text-zinc-500">
          Actualiza tu contraseña para mantener tu cuenta segura
        </p>
      </div>
      <div className="bg-white space-y-4">
        {/* PASSWORD ACTUAL */}
        <div className="space-y-1">
          <FormLabel htmlFor="currentPassword">Contraseña actual</FormLabel>
          <FormInput
            type="password"
            id="currentPassword"
            placeholder="Ingresa tu contraseña actual"
            {...register("currentPassword")}
          />
          {errors.currentPassword && (
            <FormErrors>{errors.currentPassword.message}</FormErrors>
          )}
        </div>
        {/* NUEVA PASSWORD */}
        <div className="space-y-1">
          <FormLabel htmlFor="newPassword">Nueva contraseña</FormLabel>
          <FormInput
            type="password"
            id="newPassword"
            placeholder="Ingresa tu nueva contraseña"
            {...register("newPassword")}
          />
          {errors.newPassword && (
            <FormErrors>{errors.newPassword.message}</FormErrors>
          )}
        </div>
        {/* CONFIRMAR PASSWORD */}
        <div className="space-y-1">
          <FormLabel htmlFor="confirmPassword">
            Repetir nueva contraseña
          </FormLabel>
          <FormInput
            type="password"
            id="confirmPassword"
            placeholder="Repite tu nueva contraseña"
            {...register("confirmPassword")}
          />
          {errors.newPassword && (
            <FormErrors>{errors.newPassword.message}</FormErrors>
          )}
        </div>
        {/* CHECKBOX */}
        {/* <div className="flex items-center gap-2 pt-2">
          <input
            type="checkbox"
            id="logoutAll"
            className="
              w-4 h-4
              accent-[#DB4444]
              cursor-pointer
            "
          />
          <FormLabel htmlFor="logoutAll" className="text-sm cursor-pointer">
            Cerrar sesión en todos los dispositivos
          </FormLabel>
        </div> */}
        {/* SUBMIT */}
        <div className="pt-2">
          <FormSubmit value="Actualizar contraseña" />
        </div>
      </div>
    </Form>
  );
}
