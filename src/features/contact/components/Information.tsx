"use client";

import { FiPhone, FiMail } from "react-icons/fi";

export default function Information() {
  return (
    <aside className="flex flex-col gap-8 shadow-sm rounded-md p-6 bg-white ">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#DD4444] text-white">
            <FiPhone />
          </div>

          <h3 className="font-semibold text-lg text-black">
            Llámanos
          </h3>
        </div>

        <p className="text-sm text-gray-500">
          Estamos disponibles 24/7, los 7 días de la semana.
        </p>

        <span className="text-sm font-medium text-black">
          Teléfono: +56 9 1234 5678
        </span>
      </div>

      <div className="w-full h-px bg-black/10" />

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#DD4444] text-white">
            <FiMail />
          </div>

          <h3 className="font-semibold text-lg text-black">
            Escríbenos
          </h3>
        </div>

        <p className="text-sm text-gray-500">
          Completa nuestro formulario y te contactaremos dentro de 24 horas.
        </p>

        <div className="flex flex-col text-sm font-medium text-black">
          <span>support@exclusive.com</span>
          <span>customer@exclusive.com</span>
        </div>
      </div>

    </aside>
  );
}