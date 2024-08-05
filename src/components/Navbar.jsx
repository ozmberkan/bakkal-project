import React from "react";
import { BiCart } from "react-icons/bi";

const Navbar = ({ cart, totalPrice }) => {
  return (
    <div className="w-full h-20 bg-sky-500 rounded flex justify-between items-center px-12">
      <h1 className="text-2xl font-semibold text-white">Bakkal Project</h1>

      <div className="flex items-center justify-center gap-x-12 ">
        <div className="bg-white px-4 py-2 rounded-md border">
          Toplam Tutar : {totalPrice}₺
        </div>
        <div className="p-2 relative flex justify-center items-center cursor-pointer hover:bg-sky-100 rounded-full bg-sky-200">
          <BiCart size={24} />
          <span className="w-5 h-5 text-sm bg-red-500 rounded-full flex justify-center items-center absolute -top-1 -right-2 text-white">
            {cart.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
