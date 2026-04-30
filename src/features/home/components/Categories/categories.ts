export type Category = {
  id: number;
  name: string;
  icon: string; 
};

export const categories: Category[] = [
  { id: 1, name: "Celulares", icon: "/images/home/categories/cellphone.svg" },
  { id: 2, name: "Computadores", icon: "/images/home/categories/computer.svg" },
  { id: 3, name: "SmartWatch", icon: "/images/home/categories/smartwatch.svg" },
  { id: 4, name: "Cámaras", icon: "/images/home/categories/camera.svg" },
  { id: 5, name: "Audífonos", icon: "/images/home/categories/headphone.svg" },
  { id: 6, name: "Gaming", icon: "/images/home/categories/gaming.svg" },
  { id: 7, name: "TV & Video", icon: "/images/home/categories/tv.svg" },
  { id: 8, name: "Accesorios", icon: "/images/home/categories/accesorios.svg" },
];