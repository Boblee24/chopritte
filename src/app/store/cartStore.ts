"use client"

import { create } from "zustand";
import { Foods, CartState } from "../lib/types";

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (food: Foods) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === food.id);

      if (existingItem) {
        // If the item exists, increase the quantity
        return {
          cart: state.cart.map((item) =>
            item.id === food.id
              ? { ...item, quantity: (item.quantity || 1) + 1 }
              : item
          ),
        };
      }

      // If the item does not exist, add it with a quantity of 1
      return { cart: [...state.cart, { ...food, quantity: 1 }] };
    }),
  updateQuantity: (foodId: string, quantity: number) =>
    set((state) => ({
      cart: state.cart.map((food) =>
        food.id === foodId ? { ...food, quantity } : food
      ),
    })),
  removeFromCart: (foodId: string) =>
    set((state) => ({
      cart: state.cart.filter((food: Foods) => food.id !== foodId),
    })),
  clearCart: () => set({ cart: [] }),
}));
