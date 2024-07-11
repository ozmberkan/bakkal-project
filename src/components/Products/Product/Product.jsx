import React from "react";

const Product = ({ product }) => {
  const { name, category, image, price } = product;

  return (
    <div className="flex justify-start gap-y-3 items-center flex-col border-2 border-zinc-300 rounded-xl w-full px-6 py-6 shadow-md">
      <div className="w-full h-48 border flex justify-center items-center p-3 rounded-md ">
        <img src={image} alt="product-image" className="object-cover h-full" />
      </div>
      <div className=" py-5 flex flex-col gap-y-2 w-full">
        <div className="flex justify-between">
          <span className="text-2xl font-semibold">{name}</span>
          <span className="text-2xl font-semibold">{price}₺</span>
        </div>
        <span className="text-sm text-zinc-600">{category}</span>
      </div>
      <div className="w-full">
        <button className="w-full py-3 text-white rounded bg-[#509caf] hover:ring-2 hover:ring-offset-4 ring-[#509caf] transition-all duration-500 hover:shadow-lg">
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default Product;
