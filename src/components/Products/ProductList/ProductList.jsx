import React from "react";
import Product from "../Product/Product";

const ProductList = ({ mainData, basket, setBasket, filtered }) => {
  const filteredData = mainData.filter((product) => {
    return (
      product.category.toLowerCase().includes(filtered.toLowerCase()) ||
      product.name.toLowerCase().includes(filtered.toLowerCase())
    );
  });

  return (
    <div className="w-full  grid grid-cols-4 content gap-10 py-5 px-36 mb-6">
      {filteredData.map((product) => (
        <Product
          key={product.id}
          product={product}
          basket={basket}
          setBasket={setBasket}
        />
      ))}
    </div>
  );
};

export default ProductList;
