import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ForgotPasswordForm from "@/src/features/auth/components/ForgotPasswordForm";
import { FiLogIn, FiUserPlus } from "react-icons/fi";
import Heading from "@/src/shared/components/ui/typography/Heading";

export const metadata: Metadata = {
  title: "Recuperar contraseña",
};

export default function ForgotPasswordPage() {
  return (
    <section className="min-h-dvh grid lg:grid-cols-2">

      {/* LEFT - IMAGE */}
      <div className="hidden lg:block relative">
        <Image
          src="/images/auth/bg-auth.png"
          alt="Auth background"
          fill
          priority
          className="object-cover object-left"
          sizes="40vw"
        />
      </div>

      {/* RIGHT - CONTENT */}
      <div className="flex flex-col lg:justify-center sm:px-10 lg:px-16 px-4 py-12">
        {/* HEADER */}
        <div className="space-y-1 max-w-xl mx-auto text-left mb-6">
          <Heading level={1}>Recuperar Contraseña</Heading>
          <p className="text-sm text-zinc-500">
            Recupera tu contraseña ingresando tu email
          </p>
        </div>

        {/* FORM */}
        <ForgotPasswordForm />
      </div>
    </section>
  );
}