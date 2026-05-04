// HeaderFull.tsx (server)
import Heading from "../../ui/typography/Heading";
import { Navbar } from "./Navbar";
import { SearchBar } from "./SearchBar";
import { Actions } from "./Actions";
import { auth } from "@/src/lib/auth";
import { headers } from "next/headers";

export default async function Header() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4">

        <Heading level={1} className="text-black font-bold">
          Exclusive
        </Heading>
        <Navbar />

        <div className="flex gap-4 items-center">
          <SearchBar />
          <Actions user={session?.user ?? null} />
        </div>
      </div>
    </header>
  );
}