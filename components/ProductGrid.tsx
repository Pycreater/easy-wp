"use client";

import { navbarData } from "@/lib/data";
import { MoreVertical, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useCart } from "@/hooks/use-cart";
import Image from "next/image";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  products: any[];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProductGrid = ({ products }: Props) => {
  const [toggle, setToggle] = useState(false);
  const cart = useCart();
  const isOpen = cart?.isOpen;
  const setIsOpen = cart?.setIsOpen;
  const cartItems = cart?.items || [];

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-10 bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button className="p-2" onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <X className="h-6 w-6 font-bold" />
            ) : (
              <MoreVertical className="h-6 w-6 " />
            )}
            <span className="sr-only">Menu</span>
          </button>
          {toggle && (
            <div className="w-full flex gap-x-10 items-center justify-center">
              {navbarData.map((item) => (
                <Link key={item.idx} href={item.link}>
                  {item.title}
                </Link>
              ))}
            </div>
          )}

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="text-lg font-medium flex items-center gap-2 hover:cursor-pointer">
                <span>Cart</span>
                {cartItems.length > 0 && (
                  <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium bg-black text-white rounded-full">
                    {cartItems.reduce(
                      (total, item) => total + item.quantity,
                      0
                    )}
                  </span>
                )}
              </button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md">
              <SheetHeader>
                <SheetTitle>Your Cart</SheetTitle>
              </SheetHeader>
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-[50vh]">
                  <ShoppingCart className="h-12 w-12 text-gray-300 mb-4" />
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <div className="flex flex-col h-full">
                  <div className="flex-1 overflow-auto py-6">
                    <ul className="space-y-6">
                      {cartItems.map((item) => (
                        <li key={item.id} className="flex gap-4">
                          ``
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                            <Image src={item.images[0].src} />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
};

export default ProductGrid;
