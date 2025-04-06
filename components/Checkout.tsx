"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { useCart } from "@/hooks/use-cart";

type Props = {};

const Checkout = (props: Props) => {
  const { items } = useCart();
  const [loading, setLoading] = useState(false);

  const onCheckOut = async () => {};

  return (
    <div className="mt-6 grid gap-4">
      <Button
        size="lg"
        className="w-full cursor-pointer"
        disabled={loading || items.length === 0}
        onClick={onCheckOut}
      >
        {loading ? "Processing..." : "Checkout"}
      </Button>
    </div>
  );
};

export default Checkout;
