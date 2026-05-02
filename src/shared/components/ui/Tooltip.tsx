"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  label: string;
};

export function Tooltip({ children, label }: Props) {
  return (
    <div className="relative group flex items-center">
      {children}

      <span
        className="
          pointer-events-none
          absolute -top-9 left-1/2 -translate-x-1/2
          whitespace-nowrap
          rounded-md bg-black px-2 py-1 text-xs text-white
          opacity-0 translate-y-1
          transition-all duration-200
          group-hover:opacity-100 group-hover:translate-y-0
          group-focus-within:opacity-100 group-focus-within:translate-y-0
        "
      >
        {label}
      </span>
    </div>
  );
}