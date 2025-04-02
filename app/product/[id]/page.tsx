import React from "react";

type Props = {
  params: { id: string };
};

const ProductPage = ({ params: { id } }: Props) => {
  return <div>product id - {id}</div>;
};

export default ProductPage;
