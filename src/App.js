import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { Carrito } from "./pages/Carrito";
import { DetailPage } from "./pages/DetailPage";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  }

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  function decreaseQuantity(itemId) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === itemId);

      if (existingItem && existingItem.quantity > 1) {
        return prevItems.map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      } else {
        return prevItems.filter((cartItem) => cartItem.id !== itemId);
      }
    });
  }

  return (
    <div>
      <BrowserRouter>
        <NavBar
          cartCount={cartItems.reduce(
            (total, item) => total + item.quantity,
            0
          )}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Home />} />
          <Route
            path="/page2"
            element={
              <Carrito
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                decreaseQuantity={decreaseQuantity}
              />
            }
          />
          <Route
            path="/detail/:id"
            element={<DetailPage addToCart={addToCart} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
