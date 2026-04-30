
export type Category = {
  id: string;
  name: string;
  slug: string;
};

export const categories: Category[] = [
  {
    id: "women",
    name: "Moda Mujer",
    slug: "moda-mujer",
  },
  {
    id: "men",
    name: "Moda Hombre",
    slug: "moda-hombre",
  },
  {
    id: "electronics",
    name: "Electrónica",
    slug: "electronica",
  },
  {
    id: "home",
    name: "Hogar y Estilo de Vida",
    slug: "hogar",
  },
  {
    id: "sports",
    name: "Deportes y Aire Libre",
    slug: "deportes",
  },
  {
    id: "kids",
    name: "Bebés y Juguetes",
    slug: "bebes-juguetes",
  },
  {
    id: "groceries",
    name: "Alimentos y Mascotas",
    slug: "alimentos-mascotas",
  },
  {
    id: "beauty",
    name: "Salud y Belleza",
    slug: "salud-belleza",
  },
];