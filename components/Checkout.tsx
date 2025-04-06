"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { useCart } from "@/hooks/use-cart";
import { loadStripe } from "@stripe/stripe-js";

type Props = {};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const Checkout = (props: Props) => {
  const { items } = useCart();
  const [loading, setLoading] = useState(false);

  const onCheckOut = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      });

      const { sessionId } = await response.json();

      const stripe = await stripePromise;
      const { error } = await stripe!.redirectToCheckout({ sessionId });
      if (error) {
        console.error("Error redirecting to checkout:", error);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    } finally {
      setLoading(false);
    }
  };

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
