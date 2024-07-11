import React from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { BiSearch, BiSolidCategory } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="w-full h-24 px-12 bg-[#509caf] flex justify-between items-center">
      <div className="flex items-end justify-center">
        <h1 className="text-white text-3xl font-bold">BAKKAL</h1>
        <p className="text-white/50 font-mono leading-tight tracking-tighter">
          v0.1
        </p>
      </div>
      <div className="text-white font-semibold flex gap-x-5 items-center justify-center">
        <div className="relative">
          <label className="absolute top-4 right-4 text-zinc-300 w-5 h-5 cursor-pointer ">
            <BiSearch size={20} />
          </label>
          <input
            type="text"
            maxLength={30}
            className="p-3 w-[400px] rounded-full text-[#303030] pl-5 pr-10 text-semibold text-base outline-none ring-white/60 ring-offset-2 ring-offset-transparent focus:outline-none focus:ring-2 transition-all duration-500"
          />
        </div>

        <div className="p-3 hover:bg-white/30 transition-all duration-500 rounded-full hover:ring-2 hover:ring-white/60 ring-offset-2 ring-offset-transparent cursor-pointer">
          <BiSolidCategory size={25} />
        </div>
        <div className="p-3 bg-white/30 hover:bg-white/10 transition-all duration-500 rounded-full ring-2 ring-white/60 ring-offset-2 ring-offset-transparent cursor-pointer">
          <FaBasketShopping size={25} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
