import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Container from "./containers/Container";
import Cart from "./components/Cart";
import Products from "./components/Products";
import FlexContainer from "./containers/FlexContainer";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((cart) => {
      const findItem = cart.find((item) => item.id === product.id);
      if (findItem) {
        return cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...cart, { ...product, quantity: 1 }];
      }
    });
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const deleteCItem = (id) => {
    setCart((cart) =>
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const addCItem = (id) => {
    setCart((cart) =>
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  return (
    <Container>
      <Navbar cart={cart} totalPrice={totalPrice} />
      <FlexContainer>
        <Products addToCart={addToCart} />
        <Cart cart={cart} deleteCItem={deleteCItem} addCItem={addCItem} />
      </FlexContainer>
    </Container>
  );
};

export default App;
