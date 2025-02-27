import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./pages/CartContext";
import { AuthProvider } from "./AuthContext"; // Import AuthProvider
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./components/ForgotPassword";
import Chatbot from "./components/Chatbot";
import ScrollToTop from "./components/ScrollToTop";
import "../src/styles/chatbot.css";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
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
          <Chatbot />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
