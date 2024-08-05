import React from "react";
import ProductItem from "./ProductItem";
import { ProductData } from "../data/ProductData";

const Products = ({ addToCart }) => {
  return (
    <div className="flex-1 ">
      <div className="grid grid-cols-4 gap-5">
        {ProductData.map((product) => (
          <ProductItem
            addToCart={addToCart}
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
