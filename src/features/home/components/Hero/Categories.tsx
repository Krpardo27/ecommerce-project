import Link from "next/link";
import { categories } from "../data/categories";

export default function Categories() {
  return (
    <aside className="w-[260px] border-r pr-4 hidden lg:block">
      <ul className="flex flex-col gap-4 lg:mt-12">
        {categories.map((cat) => (
          <li key={cat.id}>
            <Link
              href="#"
              className="text-sm text-gray-700 hover:text-black transition-colors"
            >
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}