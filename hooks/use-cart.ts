"use client";

import { CartContext } from "@/providers/cart-context";
import { useContext } from "react";

export function useCart() {
  const cartContext = useContext(CartContext);

  if (CartContext === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return cartContext;
}
