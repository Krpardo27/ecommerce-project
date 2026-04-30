
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contacto" },
  { label: "About", href: "/about" },
  { label: "Sign Up", href: "/signup" },
];

export function Navbar() {
  return (
    <nav className="hidden md:flex items-center gap-10">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-md text-black font-jakarta font-medium hover:text-primary transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}