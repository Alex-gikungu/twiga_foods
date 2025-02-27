import React, { createContext, useState, useContext } from "react";
import { AuthContext } from "../AuthContext"; // Import AuthContext

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]); // Add orders state
  const { isAuthenticated } = useContext(AuthContext); // Get authentication state

  const addToCart = (product) => {
    if (!isAuthenticated) {
      alert("You must be logged in to add items to the cart."); // Alert user
      return; // Prevent adding to cart if not authenticated
    }

    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Function to add an order
  const addOrder = (order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalPrice,
        orders, // Include orders in the context
        addOrder, // Include addOrder function
      }}
    >
      {children}
    </CartContext.Provider>
  );
};