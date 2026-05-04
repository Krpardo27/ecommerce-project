import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* 1️⃣ BRAND + SUSCRIPCIÓN */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Exclusive</h2>

            <span className="font-semibold">Suscríbete</span>

            <p className="text-sm text-gray-400">
              Obtén un 10% en tu primera compra
            </p>

            <form className="flex border border-gray-600 rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Tu email"
                className="bg-transparent px-3 py-2 text-sm outline-none flex-1"
              />
              <button className="bg-white text-black px-4 text-sm font-semibold">
                OK
              </button>
            </form>
          </div>

          {/* 2️⃣ AYUDA / CONTACTO */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold">Soporte</h3>

            <p className="text-sm text-gray-400">
              Av. Siempre Viva 742, Santiago
            </p>
            <p className="text-sm text-gray-400">soporte@exclusive.com</p>
            <p className="text-sm text-gray-400">+56 9 1234 5678</p>
          </div>

          {/* 3️⃣ CUENTA */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold">Cuenta</h3>

            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li>
                <Link href="/mi-cuenta" className="hover:text-white">Mi cuenta</Link>
              </li>
              <li>
                <Link href="/iniciar-sesion" className="hover:text-white">
                  Iniciar sesión / Registrarse
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-white">
                  Carrito
                </Link>
              </li>
              <li>
                <Link href="/lista-de-deseos" className="hover:text-white">
                  Lista de deseos
                </Link>
              </li>
              <li>
                <Link href="/tienda" className="hover:text-white">
                  Tienda
                </Link>
              </li>
            </ul>
          </div>

          {/* 4️⃣ LINKS */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold">Enlaces rápidos</h3>

            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li>
                <Link href="/terminos-y-condiciones" className="hover:text-white">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* 5️⃣ APP + SOCIAL */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Descargar App</h3>

            <div className="flex flex-col gap-2">
              <button className="border border-gray-600 py-2 text-sm rounded-md">
                Google Play
              </button>
              <button className="border border-gray-600 py-2 text-sm rounded-md">
                App Store
              </button>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 pt-2">
              <FaFacebookF className="cursor-pointer hover:text-gray-400" />
              <FaXTwitter className="cursor-pointer hover:text-gray-400" />
              <FaInstagram className="cursor-pointer hover:text-gray-400" />
              <FaLinkedinIn className="cursor-pointer hover:text-gray-400" />
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Exclusive. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
