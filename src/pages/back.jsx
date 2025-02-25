import React, { useContext } from "react";
import { CartContext } from "../pages/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useContext(CartContext);

  const handleMpesaPayment = () => {
    const phoneNumber = prompt("Enter your M-Pesa phone number:");
    if (phoneNumber) {
      alert(`Payment request sent to ${phoneNumber}. Total: Ksh ${totalPrice}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-grow p-6">
        <h1 className="text-4xl font-bold text-green-600 mb-8 text-center">Shopping Cart</h1>
        <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
          {cart.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          ) : (
            <>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-3 text-left">Product</th>
                    <th className="p-3 text-center">Quantity</th>
                    <th className="p-3 text-center">Price</th>
                    <th className="p-3 text-center">Total</th>
                    <th className="p-3 text-center">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="p-3 flex items-center">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                        <span className="ml-4">{item.name}</span>
                      </td>
                      <td className="p-3 text-center">
                        <button className="px-2" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                        <span className="mx-2">{item.quantity}</span>
                        <button className="px-2" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      </td>
                      <td className="p-3 text-center">Ksh {item.price}</td>
                      <td className="p-3 text-center">Ksh {item.price * item.quantity}</td>
                      <td className="p-3 text-center">
                        <button className="text-red-500 hover:text-red-700" onClick={() => removeFromCart(item.id)}>X</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <div className="mt-6 p-4 border-t">
                <div className="flex justify-between text-lg font-bold">
                  <span>Subtotal:</span>
                  <span>Ksh {totalPrice}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Tax (16% VAT):</span>
                  <span>Ksh {(totalPrice * 0.16).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold mt-2">
                  <span>Total:</span>
                  <span>Ksh {(totalPrice * 1.16).toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
                  onClick={handleMpesaPayment}
                >
                  Pay with M-Pesa
                </button>
                <button
                  className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Proceed to Shipping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
