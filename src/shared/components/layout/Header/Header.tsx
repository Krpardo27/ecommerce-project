import Heading from "../../ui/typography/Heading";
import { Actions } from "./Actions";
import { Navbar } from "./Navbar";
import { SearchBar } from "./SearchBar";

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4">
        <Heading level={1} className=" text-black font-bold">Exclusive</Heading>
        <Navbar />
        <div className="flex gap-4">
          <SearchBar />
          <Actions />
        </div>
      </div>
    </header>
  );
}
