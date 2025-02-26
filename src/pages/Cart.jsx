import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../pages/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "../styles/cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, addOrder } = useContext(CartContext);
  const navigate = useNavigate();
  const formattedTotalPrice = totalPrice ? totalPrice.toFixed(2) : "0.00";

  const [showShipping, setShowShipping] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [shippingFee, setShippingFee] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [shippingDetails, setShippingDetails] = useState({
    location: "",
    pickupPoint: "",
    shippingPhone: "",
  });

  const totalAmount = (parseFloat(formattedTotalPrice) + parseFloat(shippingFee)).toFixed(2);

  const handleShippingToggle = () => {
    setShowShipping(!showShipping);
  };

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails({ ...shippingDetails, [name]: value });

    if (name === "location") {
      const fees = {
        Nairobi: 200,
        Kisumu: 200,
        Mombasa: 300,
        Nakuru: 150,
        Eldoret: 180,
      };
      setShippingFee(fees[value] || 0);
    }
  };

  const handleOrderPlacement = () => {
    if (!shippingDetails.location || !shippingDetails.shippingPhone) {
      alert("Please fill in the shipping details first.");
      return;
    }
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    if (paymentMethod === "mpesa" && !phoneNumber) {
      alert("Please enter your M-Pesa phone number.");
      return;
    }

    // Create a new order object
    const newOrder = {
      id: Date.now(), // Use a unique ID (e.g., timestamp)
      date: new Date().toLocaleString(), // Add the current date and time
      items: cart, // Include the cart items
      totalPrice: totalAmount, // Include the total price
      status: 1, // Initial status (e.g., "Packed")
    };

    // Add the order to the orders array in CartContext
    addOrder(newOrder);

    alert(`Order placed successfully using ${paymentMethod === "mpesa" ? "M-Pesa" : "Cash on Delivery"}. Total: Ksh ${totalAmount}`);

    // Redirect to the orders page after successful order placement
    navigate("/orders");
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
              <button className="btn btn-primary mt-4 w-100" onClick={handleShippingToggle}>
                {showShipping ? "Hide Shipping Details" : "Enter Shipping Details"}
              </button>
              {showShipping && (
                <div className="mt-3 border p-3 rounded bg-light">
                  <label>Location:</label>
                  <select
                    name="location"
                    className="form-control mb-2"
                    onChange={handleShippingChange}
                    value={shippingDetails.location}
                  >
                    <option value="">Select Location</option>
                    <option value="Nairobi">Nairobi - Ksh 200</option>
                    <option value="Kisumu">Kisumu - Ksh 200</option>
                    <option value="Mombasa">Mombasa - Ksh 300</option>
                    <option value="Nakuru">Nakuru - Ksh 150</option>
                    <option value="Eldoret">Eldoret - Ksh 180</option>
                  </select>
                  <label>Pickup Point:</label>
                  <input type="text" name="pickupPoint" className="form-control mb-2" onChange={handleShippingChange} />
                  <label>Phone Number:</label>
                  <input type="text" name="shippingPhone" className="form-control mb-2" onChange={handleShippingChange} />
                </div>
              )}
  <div className="mt-4 p-3 border-top">
                <p>Select Payment Method:</p>
                <input type="radio" name="payment" value="mpesa" onChange={(e) => setPaymentMethod(e.target.value)} /> M-Pesa
                {paymentMethod === "mpesa" && <input type="text" className="form-control mt-2" placeholder="Enter M-Pesa Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} />}<br/>
                <input type="radio" name="payment" value="cod" onChange={(e) => setPaymentMethod(e.target.value)} /> Cash on Delivery
                <button className="btn btn-success mt-3 w-100" onClick={handleOrderPlacement}>{paymentMethod === "mpesa" ? "Make Payment" : "Place Order"}</button>
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