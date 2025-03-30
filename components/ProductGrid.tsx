"use client";

import { MoreVertical, X } from "lucide-react";
import React, { useState } from "react";

type Props = {
  products: any[];
};

const ProductGrid = ({ products }: Props) => {
  const [toggle, setToggle] = useState(false);

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
              here im currently
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default ProductGrid;
