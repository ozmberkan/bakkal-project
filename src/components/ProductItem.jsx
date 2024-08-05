import React from "react";

const ProductItem = ({ product, addToCart }) => {
  const { name, category, price, image } = product;

  return (
    <div className="border rounded px-4 py-2 flex justify-center items-start flex-col">
      <div className="flex flex-col gap-y-2 w-full mb-4">
        <img
          src={image}
          className="w-full rounded-t-xl h-[150px] object-cover"
        />
        <h1 className="text-xl">{category}</h1>
        <h1 className="text-xl">{name}</h1>
        <h1 className="text-xl">{price}₺</h1>
      </div>
      <button
        onClick={() => addToCart(product)}
        className="w-full bg-blue-400 text-white py-2 rounded-md"
      >
        Sepete Ekle
      </button>
    </div>
  );
};

export default ProductItem;
