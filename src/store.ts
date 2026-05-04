import { create } from "zustand";
import { Product } from "@/src/generated/prisma/client";
import { CartItem } from "./types";
import { persist } from "zustand/middleware";

interface Store {
  cart: CartItem[];
  hydrated: boolean;

  addToCart: (product: Product) => void;
  increaseQuantity: (id: Product["id"]) => void;
  decreaseQuantity: (id: Product["id"]) => void;
  removeItem: (id: Product["id"]) => void;
  clearCart: () => void;

  setHydrated: () => void;
}

export const useStore = create<Store>()(
  persist(
    (set) => ({
      cart: [],
      hydrated: false,

      setHydrated: () => set({ hydrated: true }),

      addToCart: (product) => {
        const { id, name, price, discountPrice, image } = product;

        set((state) => {
          const existing = state.cart.find((item) => item.id === id);

          if (existing) {
            return {
              cart: state.cart.map((item) =>
                item.id === id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          }

          return {
            cart: [
              ...state.cart,
              {
                id,
                name,
                price: Number(price),
                discountPrice,
                image,
                quantity: 1,
              },
            ],
          };
        });
      },
      increaseQuantity: (id) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        }));
      },
      decreaseQuantity: (id) => {
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
            )
            .filter((item) => item.quantity > 0),
        }));
      },
      removeItem: (id) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        }));
      },
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
      onRehydrateStorage: () => (state) => {
        state?.setHydrated();
      },
    },
  ),
);
