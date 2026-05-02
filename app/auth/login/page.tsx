import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LoginForm from "@/src/features/auth/components/LoginForm";
import { FiUserPlus } from "react-icons/fi";
import Heading from "@/src/shared/components/ui/typography/Heading";
import { generatePageTitle } from "@/src/utils/metadata";

export const metadata: Metadata = {
  title: generatePageTitle("Iniciar sesión"),
};

export default function LoginPage() {
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
          <Heading level={1}>Iniciar sesión</Heading>
          <p className="text-sm text-zinc-500">
            Inicia sesión para lo Exclusivo
          </p>
        </div>
        {/* FORM */}
        <LoginForm />
      </div>
    </section>
  );
}