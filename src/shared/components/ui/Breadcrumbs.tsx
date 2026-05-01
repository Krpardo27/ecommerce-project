"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className="max-w-7xl mx-auto px-4 text-sm text-gray-500">
      <ol className="flex items-end gap-2 flex-wrap">
        <li>
          <Link href="/" className="hover:text-black">
            Home
          </Link>
        </li>
        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;

          const label =
            segment.charAt(0).toUpperCase() + segment.slice(1);

          return (
            <li key={href} className="flex items-center gap-2">
              <span className="text-gray-400">/</span>

              {isLast ? (
                <span className="text-black font-medium">{label}</span>
              ) : (
                <Link href={href} className="hover:text-black">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}