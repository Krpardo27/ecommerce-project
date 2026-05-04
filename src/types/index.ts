import { Product } from "@/src/generated/prisma/client";

export type CartItem = Pick<
  Product,
  "id" | "name" | "price" | "discountPrice" | "image"
> & {
  quantity: number;
};