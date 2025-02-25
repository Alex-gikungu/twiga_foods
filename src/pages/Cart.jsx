import React, { useContext } from "react";
import { CartContext } from "../pages/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { DotLottieReact } from "@lottiefiles/dotlottie-react"; 
import "../styles/cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useContext(CartContext);
  const formattedTotalPrice = totalPrice ? totalPrice.toFixed(2) : "0.00";

  const handleMpesaPayment = () => {
    const phoneNumber = prompt("Enter your M-Pesa phone number:");
    if (phoneNumber) {
      alert(`Payment request sent to ${phoneNumber}. Total: Ksh ${formattedTotalPrice}`);
    }
  };

  const handleProceedToShipping = () => {
    alert("Proceeding to shipping details...");
  };

  return (
    <div className="min-h-screen bg-light flex flex-col">
      <Navbar />
      <div className="flex-grow p-6">
        <h1 className="text-4xl font-bold text-success mb-4 text-center">Shopping Cart</h1>
        <div className="container bg-white shadow-lg rounded-lg p-4">
          {cart.length === 0 ? (
            <div className="text-center">
              <p className="text-muted">Your cart is empty. Start shopping now!</p>
              <div style={{ width: "300px", height: "300px", margin: "0 auto" }}>
                <DotLottieReact
                  src="https://lottie.host/0d6035a2-185f-4a7c-8e5d-64fba7db66d0/K4AxcCkRHG.lottie"
                  loop
                  autoplay
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          ) : (
            <>
              <table className="table table-striped table-bordered">
                <thead className="thead-light">
                  <tr>
                    <th className="text-left">Product</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Total</th>
                    <th className="text-center">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td className="d-flex align-items-center">
                        <img src={item.image} alt={item.name} className="img-thumbnail me-3" style={{ width: '80px', height: '80px' }} />
                        <span>{item.name}</span>
                      </td>
                      <td className="text-center">
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </td>
                      <td className="text-center">Ksh {item.price}</td>
                      <td className="text-center">Ksh {item.price * item.quantity}</td>
                      <td className="text-center">
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => removeFromCart(item.id)}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <div className="mt-4 p-3 border-top">
                <div className="d-flex justify-content-between">
                  <span className="font-weight-bold">Subtotal:</span>
                  <span>Ksh {formattedTotalPrice}</span>
                </div>
                <div className="d-flex justify-content-between font-weight-bold mt-2">
                  <span>Total:</span>
                  <span>Ksh {formattedTotalPrice}</span>
                </div>
              </div>

              <div className="mt-4 d-flex justify-content-between">
                <button className="btn btn-success" onClick={handleMpesaPayment}>
                  Pay with M-Pesa
                </button>
                <button className="btn btn-primary" onClick={handleProceedToShipping}>
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
