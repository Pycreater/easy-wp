import React from "react";

type Props = {
  params: { id: string };
};

const ProductPage = ({ params: { id } }: Props) => {
  return <div>product id number - {id}</div>;
};

export default ProductPage;
