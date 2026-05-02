import Link from "next/link";
import { Metadata } from "next";
import { FiKey, FiLogIn } from "react-icons/fi";
import { generatePageTitle } from "@/src/utils/metadata";
import Heading from "@/src/shared/components/ui/typography/Heading";
import RegisterForm from "@/src/features/auth/components/RegisterForm";
import Image from "next/image";

export const metadata: Metadata = {
  title: generatePageTitle("Crear cuenta"),
};

export default function RegisterPage() {
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
          <Heading level={1}>Regístrarse</Heading>
          <p className="text-sm text-zinc-500">
            Regístrate   para lo Exclusivo
          </p>
        </div>
        <RegisterForm />

      </div>
    </section>
  );
}