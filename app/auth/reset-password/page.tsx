import SetPasswordForm from "@/src/features/auth/components/SetPasswordForm";
import Heading from "@/src/shared/components/ui/typography/Heading";

export default function ResetPasswordPage() {
  return (
    <section className="min-h-dvh flex items-center justify-center bg-[#F9FAFB] px-4">
      <div className="w-full max-w-md bg-white border border-gray-100 rounded-2xl shadow-sm p-8">
        {/* HEADER */}
        <div className="mb-6 text-center">
          <Heading level={1}>
            Nueva contraseña
          </Heading>
          <p className="text-sm text-gray-500 mt-2">
            Ingresa tu nueva contraseña para continuar
          </p>
        </div>

        {/* FORM */}
        <SetPasswordForm />

        {/* FOOTER */}
        <p className="text-xs text-gray-400 mt-6 text-center">
          Este enlace puede expirar por seguridad
        </p>
      </div>
    </section>
  );
}