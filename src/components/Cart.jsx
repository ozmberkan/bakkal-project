import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cart, deleteCItem, addCItem }) => {
  return (
    <div className="w-3/12 bg-sky-200 min-h-[600px] flex justify-start items-start gap-y-5 flex-col p-3 ">
      {cart.length > 0 ? (
        cart.map((cItem, i) => (
          <CartItem
            key={i}
            cItem={cItem}
            deleteCItem={deleteCItem}
            addCItem={addCItem}
          />
        ))
      ) : (
        <div>Sepette ürün yok!</div>
      )}
    </div>
  );
};

export default Cart;
