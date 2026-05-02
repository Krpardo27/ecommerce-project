type CategorySeed = {
  name: string;
  slug: string;
  parentSlug?: string;
};

export const categories: CategorySeed[] = [
  // PADRES
  { name: "Moda Mujer", slug: "moda-mujer" },
  { name: "Moda Hombre", slug: "moda-hombre" },
  { name: "Electrónica", slug: "electronica" },
  { name: "Hogar y Estilo de Vida", slug: "hogar" },
  { name: "Deportes y Aire Libre", slug: "deportes" },
  { name: "Bebés y Juguetes", slug: "bebes-juguetes" },
  { name: "Alimentos y Mascotas", slug: "alimentos-mascotas" },
  { name: "Salud y Belleza", slug: "salud-belleza" },

  // HIJOS de Electrónica
  {
    name: "Celulares",
    slug: "celulares",
    parentSlug: "electronica",
  },
  {
    name: "Computadores",
    slug: "computadores",
    parentSlug: "electronica",
  },
  {
    name: "SmartWatch",
    slug: "smartwatch",
    parentSlug: "electronica",
  },
  {
    name: "Cámaras",
    slug: "camaras",
    parentSlug: "electronica",
  },
  {
    name: "Audífonos",
    slug: "audifonos",
    parentSlug: "electronica",
  },
  {
    name: "Gaming",
    slug: "gaming",
    parentSlug: "electronica",
  },
  {
    name: "TV & Video",
    slug: "tv-video",
    parentSlug: "electronica",
  },
  {
    name: "Accesorios",
    slug: "accesorios",
    parentSlug: "electronica",
  },
];