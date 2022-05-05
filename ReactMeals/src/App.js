import React, { useState, useContext } from "react";
import Header from "./components/Layout/Header";
// import Meals from "./components/Meals/Meals.js";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = (cartIsVisible) => {
    console.log("YOOOO CLICKED", cartIsVisible);
    setCartIsShown(true);
  };

  const hideCartHandler = (cartIsVisible) => {
    setCartIsShown(false);
    console.log("YOOOO CLICKED", cartIsVisible);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
