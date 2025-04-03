"use server";

import WooCommerceRestApi from "woocommerce-rest-ts-api";

const woocommerce = new WooCommerceRestApi({
  url: "http://demo.local/",
  consumerKey: process.env.WC_CONSUMER_KEY as string,
  consumerSecret: process.env.WC_CONSUMER_SECRET as string,
  version: "wc/v3",
});

export const getProducts = async () => {
  const products = await woocommerce.get("products");
  return products.data;
};

export const getProduct = async (id: string) => {
  const product = await woocommerce.get(`products`, { id: parseInt(id) });

  return product.data;
};
