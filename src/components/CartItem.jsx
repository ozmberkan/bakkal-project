import React from "react";

const CartItem = ({ cItem, deleteCItem, addCItem }) => {
  return (
    <div className="border px-4 py-2 w-full bg-white rounded-md flex items-center justify-between ">
      <div className="flex gap-x-4 items-center">
        <div className="relative">
          <img
            src={cItem.image}
            alt=""
            className="w-10 h-10 rounded-full object-cover border"
          />
          <span className="w-5 h-5 text-sm bg-red-500 rounded-full flex justify-center items-center absolute -top-1 -right-2 text-white">
            {cItem.quantity}
          </span>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl">{cItem.name}</h1>
          <h1 className="text-xl">{cItem.price * cItem.quantity}₺</h1>
        </div>
      </div>
      <div className=" flex flex-col gap-y-2">
        <button
          onClick={() => deleteCItem(cItem.id)}
          className="bg-red-500 text-white rounded-md px-4 py-2 h-8 hover:bg-red-700 flex justify-center items-center w-full"
        >
          SİL
        </button>
        <button
          onClick={() => addCItem(cItem.id)}
          className="bg-red-500 text-white rounded-md px-4 py-2 h-8 hover:bg-red-700 flex justify-center items-center whitespace-nowrap"
        >
          EKLE
        </button>
      </div>
    </div>
  );
};

export default CartItem;
