"use server";

import { requireAuth } from "@/src/lib/auth-server";
import {
  ChangePasswordInput,
  ChangePasswordSchema,
  ForgotPasswordInput,
  ForgotPasswordSchema,
  SetPasswordInput,
  SetPasswordSchema,
  SignInInput,
  SignInSchema,
  SignUpInput,
  SignUpSchema,
} from "../schemas/authSchema";
import { authService } from "../services/AuthService";
import { success } from "zod";

export async function signUpAction(input: SignUpInput) {
  const data = SignUpSchema.safeParse(input);
  console.log(data);

  if (!data.success) {
    return {
      error: "Error de validación",
      success: "",
    };
  }

  const response = await authService.register(data.data);
  console.log(response);

  return response;
}

export async function signInAction(input: SignInInput) {
  const data = SignInSchema.safeParse(input);
  console.log(data);

  if (!data.success) {
    return {
      error: "Error de validación",
      success: "",
    };
  }

  const response = await authService.login(input);

  return response;
}

export async function forgotPasswordAction(input: ForgotPasswordInput) {
  const data = ForgotPasswordSchema.safeParse(input);

  if (!data.success) {
    return {
      error: "Error de validación",
      success: "",
    };
  }
  const response = await authService.requestPasswordReset(input);
  return response;
}

export async function setPasswordAction(
  input: SetPasswordInput,
  token: string,
) {
  const data = SetPasswordSchema.safeParse(input);

  if (!data.success) {
    return {
      error: "Error de validación",
      success: "",
    };
  }
  console.log(token);
  const response = await authService.confirmPasswordReset(input, token);
  return response;
}

export async function changePasswordAction(input: ChangePasswordInput) {
  const { session } = await requireAuth();
  const data = ChangePasswordSchema.safeParse(input)

  if (!session || !data.success) {
    return {
      error: "Hubo un error",
      success: ''
    };
  }

  const result = await authService.changePassword(data.data)
  return result
  
}
