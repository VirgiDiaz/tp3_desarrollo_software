import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Carrito } from './pages/Carrito';
import{ DetailPage } from './pages/DetailPage';
import { useState } from 'react';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]); 
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };


  return (
    <div>
      <BrowserRouter>
        <h1>React Router example</h1>
        <NavBar cartCount={cartItems.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Home />} />
          <Route path="/page2" element={<Carrito cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/detail/:id" element={<DetailPage addToCart={addToCart}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
