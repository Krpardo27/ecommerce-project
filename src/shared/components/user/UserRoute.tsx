"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type UserRouteProps = {
  link: {
    url: string;
    text: string;
  };
};

export default function UserRoute({ link }: UserRouteProps) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(link.url);

  return (
    <Link
      href={link.url}
      className={`
        group flex items-center gap-3
        rounded-xl
        transition-all duration-200
        min-w-max px-4 py-2
        text-sm font-semibold
        bg-white border border-zinc-200
        active:scale-[0.96]
        md:w-full md:px-4 md:py-3
        md:bg-transparent md:border-transparent
        md:text-base md:font-medium
        hover:bg-zinc-100
        md:hover:bg-zinc-100/80
        md:hover:shadow-xs
        md:hover:-translate-y-px
        ${
          isActive
            ? "bg-blue-500 text-white border-blue-500 shadow-xs md:bg-blue-100 md:text-blue-700 md:border-transparent"
            : "text-zinc-700"
        }
      `}
    >
      <span
        className={`
          hidden md:block w-1 h-5 rounded-full transition-all
          ${isActive ? "bg-blue-500" : "bg-transparent"}
        `}
      />

      {link.text}
    </Link>
  );
}
