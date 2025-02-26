import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./pages/CartContext";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./components/ForgotPassword"; // Import ForgotPassword
import Chatbot from "./components/Chatbot"; // Import Chatbot
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop
import "../src/styles/chatbot.css"; // Import chatbot styles

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop /> {/* Ensures smooth scrolling between routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>

        <Chatbot /> {/* Floating chatbot component */}
      </Router>
    </CartProvider>
  );
}

export default App;
