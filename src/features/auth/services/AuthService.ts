import { auth } from "@/src/lib/auth";
import {
  ForgotPasswordInput,
  SetPasswordInput,
  SignInInput,
  SignUpInput,
} from "../schemas/authSchema";
import { headers } from "next/headers";
import { APIError } from "better-auth";

class AuthService {
  async register({ name, email, password }: SignUpInput) {
    try {
      await auth.api.signUpEmail({
        body: {
          name,
          email,
          password,
        },
      });

      return {
        error: "",
        success: "Cuenta creada correctamente",
      };
    } catch (error) {
      console.log("SIGNUP ERROR FULL:", error);

      if (error instanceof APIError) {
        const messages: Record<number, string> = {
          409: "El email ya está registrado",
          400: "Datos inválidos",
        };

        return {
          error: messages[error.statusCode] || error.message,
          success: "",
        };
      }

      return {
        error: error instanceof Error ? error.message : "Error inesperado",
        success: "",
      };
    }
  }

  async login({ email, password }: SignInInput) {
    try {
      await auth.api.signInEmail({
        body: {
          email,
          password,
          callbackURL: "/",
        },
        headers: await headers(),
      });

      return { error: "", success: "Sesión iniciada correctamente" };
    } catch (error) {
      if (error instanceof APIError) {
        const messages: Record<number, string> = {
          401: "Password incorrecto",
          403: "Email no verificado. ¡Revisa tu bandeja de entrada!",
        };

        return {
          error: messages[error.statusCode] || "Error al iniciar sesión",
          success: "",
        };
      }

      return { error: "Error inesperado", success: "" };
    }
  }

  async requestPasswordReset(input: ForgotPasswordInput) {
    try {
      const { email } = input;

      await auth.api.requestPasswordReset({
        body: { email },
        headers: await headers(),
      });

      return {
        error: "",
        success:
          "Si tu correo está registrado, recibirás las instrucciones en breve.",
      };
    } catch (error) {
      return {
        error: "Ocurrió un error al procesar la solicitud.",
        success: "",
      };
    }
  }

  async confirmPasswordReset(input: SetPasswordInput, token: string) {
    const { newPassword } = input;
    try {
      await auth.api.resetPassword({
        body: {
          newPassword,
          token,
        },
      });
      return {
        error: "",
        success:
          "Contraseña restablecida correctamente. Ya puedes iniciar sesión.",
      };
    } catch (error) {
      const errorMessage =
        error instanceof APIError
          ? "El enlace es inválido o ha expirado."
          : "Error inesperado.";

      return {
        error: errorMessage,
        success: "",
      };
    }
  }
}

export const authService = new AuthService();
