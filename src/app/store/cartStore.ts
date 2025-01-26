"use client"

import { create } from "zustand";
import { Foods, CartState } from "../lib/types";

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (food : Foods) => set((state) => ({ cart: [...state.cart, food] })),
  removeFromCart: (foodId: string) =>
    set((state) => ({ cart: state.cart.filter((food : Foods) => food.id !== foodId)})),
  clearCart: () => set({ cart: [] }),
}));
