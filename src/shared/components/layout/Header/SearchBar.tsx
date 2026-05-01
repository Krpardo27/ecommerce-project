
"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border rounded-full px-4  py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300 bg-[#F5F5F5] text-gray-700"
      />

      <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-60" />
    </div>
  );
}