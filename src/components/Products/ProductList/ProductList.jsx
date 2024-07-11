import React from "react";
import Product from "../Product/Product";

const ProductList = ({ mainData }) => {
  return (
    <div className="w-full  grid grid-cols-4 content gap-10 py-5 px-36 mb-6">
      {mainData.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};

export default ProductList;
