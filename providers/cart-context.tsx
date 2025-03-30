"use client";

import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
};

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  images: { src: string }[];
}

const CartProvider = ({ children }: Props) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  return <div>{children}</div>;
};

export default CartProvider;
