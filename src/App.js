import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Product from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import React, { useEffect, useState } from "react";

import CartProvider from "./context/CartProvider";

const App = () => {
  const [initialProduct, setProduct] = useState([]);
  const [isOpen, updateStatus] = useState(false);

  useEffect(() => {
    async function takeData() {
      const response = await fetch(
        "https://raw.githubusercontent.com/tan-devloper/jsonHolder/main/db.json"
      );

      setProduct(response.ok ? await response.json() : []);
    }

    takeData();
  }, []);

  return (
    <React.Fragment>
      <CartProvider>
        <Navigation toggle={updateStatus} />
        <Header />

        <Cart isOpen={isOpen} toggle={updateStatus} />
        <Product data={initialProduct} />
      </CartProvider>
    </React.Fragment>
  );
};

export default App;
