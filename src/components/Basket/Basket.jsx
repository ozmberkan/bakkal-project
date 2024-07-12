import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import BasketDetail from "./BasketDetail";

const Basket = ({ isOpen, setIsOpen, basket, setBasket }) => {
  const basketItems = basket.reduce((acc, item) => {
    if (acc[item.id]) {
      acc[item.id].quantity++;
    } else {
      acc[item.id] = { ...item, quantity: 1 };
    }
    return acc;
  }, {});

  const totalPrice = basket.reduce((acc, item) => acc + item.price, 0);

  const clearBasket = () => {
    setBasket([]);
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed top-32 flex w-full items-center justify-center p-4">
          <DialogPanel className=" space-y-6 border-2 border-[#141414]/30 bg-white min-h-[450px] min-w-[1000px] rounded-xl shadow-2xl py-2 px-5">
            <DialogTitle className="flex justify-between items-center py-1">
              <span className="font-bold text-3xl ">Sepet</span>
              <span
                className="text-3xl cursor-pointer hover:bg-red-500 p-1 rounded-full hover:text-red-200 transition-colors duration-500"
                onClick={() => setIsOpen(false)}
              >
                <IoIosCloseCircleOutline />
              </span>
            </DialogTitle>
            <hr />
            {basket.length > 0 ? (
              <div className="grid grid-cols-4 gap-5 overflow-auto max-h-[450px] px-4 ">
                {Object.values(basketItems).map((item) => (
                  <BasketDetail key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="px-4">
                <p className="font-medium text-2xl">
                  Sepette Herhangi bir ürün bulunmamaktadır.
                </p>
              </div>
            )}
            <div className="flex justify-between px-5 py-4">
              <span className="text-xl font-semibold ">
                Toplam Fiyat :{" "}
                <span className="text-green-400 font-semibold">
                  {totalPrice}₺
                </span>
              </span>
              <div className="flex">
                <button
                  onClick={clearBasket}
                  className=" py-2 px-4 text-white rounded bg-[#e71c1c] hover:ring-2 hover:ring-offset-4 ring-[#e71c1c] transition-all duration-500 hover:shadow-lg"
                >
                  Sepeti Boşalt
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default Basket;
