import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Navigation from "./components/Navigation";
import AllProducts from "./components/product/AllProducts";
import { CartAndDataProvider } from "./components/context/context";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="App">
      <CartAndDataProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<AllProducts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartAndDataProvider>
    </div>
  );
}

export default App;
