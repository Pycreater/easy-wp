import { getProduct } from "@/actions/products";
import React from "react";

type Props = {
  params: { id: string };
};

const ProductPage = async ({ params: { id } }: Props) => {
  const product = await getProduct(id);

  return <div>{id}</div>;
};

export default ProductPage;
