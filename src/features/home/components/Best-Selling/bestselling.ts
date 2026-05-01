export type BestSellingProduct = {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
};

export const bestSellingProducts: BestSellingProduct[] = [
  {
    id: 1,
    name: "The North Coat",
    image: "/images/home/bestselling/north-coat.png",
    price: 39990,
    rating: 4.5,
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    image: "/images/home/bestselling/canon-eos-dslr-camera.png",
    price: 829990,
    rating: 5,
  },
  {
    id: 3,
    name: "RGB Liquid CPU Cooler",
    image: "/images/home/bestselling/rgb-liquid-cpu-cooler.png",
    price: 129990,
    rating: 4,
  },
  {
    id: 4,
    name: "Small Bookshelf",
    image: "/images/home/bestselling/small-bookSelf.png",
    price: 89990,
    rating: 3.5,
  },
];
