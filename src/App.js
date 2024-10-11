import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Carrito } from './pages/Carrito';
import{ DetailPage } from './pages/DetailPage';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <h1>React Router example</h1>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Home />} />
          <Route path="/page2" element={<Carrito />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
