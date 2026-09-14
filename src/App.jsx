import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  const [cart, setCart] = useState([]);

const addToCart = (product) => {
  setCart((currentCart) => {
    const existingProduct = currentCart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      return currentCart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: (item.quantity || 0) + 1,
            }
          : item
      );
    }

    return [
      ...currentCart,
      {
        ...product,
        quantity: 1,
      },
    ];
  });
};

const removeFromCart = (productId) => {
  setCart((currentCart) =>
    currentCart.filter((item) => item.id !== productId)
  );
};
const increaseQuantity = (productId) => {
  setCart((currentCart) =>
    currentCart.map((item) =>
      item.id === productId
        ? {
            ...item,
            quantity: (item.quantity || 1) + 1,
          }
        : item
    )
  );
};

const decreaseQuantity = (productId) => {
  setCart((currentCart) =>
    currentCart.map((item) =>
      item.id === productId && (item.quantity || 1) > 1
        ? {
            ...item,
            quantity: item.quantity - 1,
          }
        : item
    )
  );
};

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<Products addToCart={addToCart} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route
  path="/cart"
  element={
    <Cart
  cart={cart}
  removeFromCart={removeFromCart}
  increaseQuantity={increaseQuantity}
  decreaseQuantity={decreaseQuantity}
/>
  }
/>
<Route
  path="/checkout"
  element={<Checkout cart={cart} />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;