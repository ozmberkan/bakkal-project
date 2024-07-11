import React from "react";

const BasketDetail = ({ item }) => {
  return (
    <div className="border inline-flex justify-between items-center gap-x-6 px-3 py-3 rounded-xl">
      <div className="w-24 h-24">
        <img src={item.image} alt="" />
      </div>
      <div>
        <p className="font-medium text-lg text-zinc-400">
          Ürün Adı: <span className="text-black">{item.name}</span>
        </p>
        <p className="font-medium text-lg text-zinc-400">
          Ürün Fiyatı: <span className="text-black">{item.price}</span>
        </p>
        <p className="font-medium text-lg text-zinc-400">
          Ürün Kategorisi: <span className="text-black">{item.category}</span>
        </p>
      </div>
    </div>
  );
};

export default BasketDetail;
