import React from "react";

type Props = {};

const ProductAction = (props: Props) => {
  return (
    <div className="rounded-lg bg-[#F4F4F5] p-6 sticky top-20 flex flex-col h-[80vh]">
      <div className="">
        <div className="grid grid-cols-3 gap-4 pb-2 border-b text-base font-medium">
          <div>Product</div>
          <div className="text-center">Q</div>
          <div className="text-right">Price</div>
        </div>

        {/* Cart Items */}
      </div>
    </div>
  );
};

export default ProductAction;
