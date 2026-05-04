import Heading from "@/src/shared/components/ui/typography/Heading";
import Link from "next/link";

export default function HeaderMinimal() {
  return (
    <header className="w-full border-b border-black/10 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Heading level={1} className="text-black font-bold">
              Exclusive
            </Heading>
          </Link>

          <span className="text-sm text-black/60">Carrito</span>
        </div>
      </div>
    </header>
  );
}
