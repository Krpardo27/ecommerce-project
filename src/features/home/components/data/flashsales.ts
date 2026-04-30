export type FlashSaleProduct = {
  id: number;
  name: string;
  image: string;
  price: number;
  discountPrice: number;
};

export const flashSales: FlashSaleProduct[] = [
  {
    id: 1,
    name: "Gucci duffle bag",
    image: "/images/home/flashsales/flashsale-1.png",
    price: 29990,
    discountPrice: 19990,
  },
  {
    id: 2,
    name: "ASUS FHD Gaming Laptop",
    image: "/images/home/flashsales/flashsale-2.png",
    price: 899990,
    discountPrice: 749990,
  },
  {
    id: 3,
    name: "S-Series Comfort Chair",
    image: "/images/home/flashsales/flashsale-3.png",
    price: 159990,
    discountPrice: 119990,
  },
  {
    id: 4,
    name: "IPS LCD Gaming Monitor",
    image: "/images/home/flashsales/flashsale-4.png",
    price: 189990,
    discountPrice: 149990,
  },
  {
    id: 5,
    name: "AK-900 Wired Keyboard",
    image: "/images/home/flashsales/flashsale-5.png",
    price: 45990,
    discountPrice: 32990,
  },

  {
    id: 6,
    name: "HAVIT HV-G92 Gamepad",
    image: "/images/home/flashsales/flashsale-6.png",
    price: 24990,
    discountPrice: 17990,
  },
];
