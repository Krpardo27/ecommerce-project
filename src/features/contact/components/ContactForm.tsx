"use client";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-6 shadow-sm rounded-md p-6 bg-white">

      {/* ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* NOMBRE */}
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          className="
            w-full px-4 py-3
            bg-[#F5F5F5]
            text-sm text-black
            outline-none
            rounded-md
            focus:ring-2 focus:ring-[#DB4444]/40
            transition
          "
        />

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Ingresa tu correo electrónico"
          className="
            w-full px-4 py-3
            bg-[#F5F5F5]
            text-sm text-black
            outline-none
            rounded-md
            focus:ring-2 focus:ring-[#DB4444]/40
            transition
          "
        />

        {/* TELÉFONO */}
        <input
          type="tel"
          placeholder="Ingresa tu teléfono"
          className="
          w-full px-4 py-3
          bg-[#F5F5F5]
          text-sm text-black
          outline-none
          rounded-md
          focus:ring-2 focus:ring-[#DB4444]/40
          transition
        "
        />

      </div>



      {/* MENSAJE */}
      <textarea
        rows={7}
        placeholder="Escribe tu mensaje"
        className="
          w-full px-4 py-3
          bg-[#F5F5F5]
          text-sm text-black
          outline-none
          rounded-md
          resize-none
          focus:ring-2 focus:ring-[#DB4444]/40
          transition
        "
      />

      {/* BUTTON */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="
            px-8 py-3
            bg-[#DB4444]
            text-white text-sm font-medium
            rounded-md
            transition
            hover:bg-[#c53a3a]
            active:scale-95
          "
        >
          Enviar mensaje
        </button>
      </div>

    </form>
  );
}