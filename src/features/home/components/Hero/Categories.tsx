import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { FiChevronRight } from "react-icons/fi";

async function getCategories() {
  return await prisma.category.findMany({
    where: {
      parentId: null,
    },
    include: {
      children: true,
    },
    orderBy: { name: "asc" },
  });
}

export default async function Categories() {
  const categories = await getCategories();

  return (
    <aside className="w-[260px] border-r pr-4 hidden lg:block">
      <ul className="flex flex-col gap-4">
        {categories.map((cat) => (
          <li key={cat.id} className="group relative">
            <Link
              href={`/categoria/${cat.slug}`}
              className="
      flex items-center justify-between
      w-full px-2 py-1
      text-sm text-gray-700 hover:text-black
      transition-colors
    "
            >
              {cat.name}
              {cat.children.length > 0 && (
                <FiChevronRight className="text-gray-400 group-hover:text-black transition-transform group-hover:translate-x-1" />
              )}
              
            </Link>

            {cat.children.length > 0 && (
              <ul
                className="
      absolute top-0 left-full
      hidden group-hover:block
      opacity-0 group-hover:opacity-100
      translate-x-2 group-hover:translate-x-0
      transition-all duration-200 ease-out
      bg-white border border-gray-100
      rounded-lg shadow-xl
      py-3 min-w-[220px]
      z-50
    "
              >
                {cat.children.map((sub) => (
                  <li key={sub.id}>
                    <Link
                      href={`/categoria/${sub.slug}`}
                      className="
            flex items-center justify-between
            px-4 py-2
            text-sm text-gray-600

            hover:bg-gray-50
            hover:text-black
            transition-all duration-150
            rounded-md
          "
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
