import React, { useContext, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { CartContext } from "../pages/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/order.css";

const Orders = () => {
  const { orders = [] } = useContext(CartContext);
  const [storedOrders, setStoredOrders] = useState([]);
  const [ratings, setRatings] = useState({});
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Load stored orders on mount
  useEffect(() => {
    const savedOrders = localStorage.getItem("orders");
    if (savedOrders) {
      setStoredOrders(JSON.parse(savedOrders));
    }
  }, []);

  // Save orders whenever they change
  useEffect(() => {
    if (orders.length > 0) {
      localStorage.setItem("orders", JSON.stringify(orders));
      setStoredOrders(orders);
    }
  }, [orders]);

  const handleRatingChange = (orderId, value) => {
    setRatings((prevRatings) => ({ ...prevRatings, [orderId]: value }));
  };

  const getEstimatedDelivery = (status) => {
    const deliveryTimes = ["Pending", "1-2 days", "3-4 days", "Delivered"];
    return deliveryTimes[status] || "Unknown";
  };

  return (
    <div className="orders-page">
      <Navbar />
      <div className="container py-4">
        <h1 className="text-center text-success fw-bold mb-4">Order Tracking</h1>

        <div className="card shadow-sm p-4">
          {storedOrders.length === 0 ? (
            <div className="text-center">
              <p className="fs-5 text-muted">No orders placed yet. Start shopping now!</p>
              <div className="lottie-container">
                <DotLottieReact
                  src="https://lottie.host/866f4773-933a-45d7-960c-886c67527c8e/aFvVks35hQ.lottie"
                  loop
                  autoplay
                />
              </div>
            </div>
          ) : (
            <div className="row g-3">
              {storedOrders.map((order, index) => (
                <div key={index} className="col-12">
                  <div className="card order-card">
                    <div className="card-body">
                      <h5 className="card-title text-success">
                        Order #{order.id} <span className="order-id-badge">✔</span>
                      </h5>
                      <p className="text-muted">
                        📅 Placed on: <strong>{order.date}</strong>
                      </p>
                      <p className="fs-5 fw-bold">💰 Total: Ksh {order.totalPrice}</p>
                      <p className="estimated-delivery">
                        📦 Estimated Delivery: <strong>{getEstimatedDelivery(order.status)}</strong>
                      </p>

                      {/* Progress Bar */}
                      <h6 className="mt-3">Order Status:</h6>
                      <div className="progress order-progress mb-3">
                        {["Packed", "Order Released", "On the Road", "Delivered"].map((step, i) => (
                          <div
                            key={i}
                            className={`progress-bar ${order.status >= i + 1 ? "bg-success active-progress" : "bg-secondary"}`}
                            style={{ width: "25%" }}
                          >
                            {step}
                          </div>
                        ))}
                      </div>

                      {/* Order Status Steps */}
                      <div className="d-flex justify-content-between">
                        {["Packed", "Order Released", "On the Road", "Delivered"].map((step, i) => (
                          <div key={i} className="text-center">
                            <div
                              className={`status-circle ${i < order.status ? "completed" : ""}`}
                            >
                              {i < order.status ? "✔" : i + 1}
                            </div>
                            <p className={`status-label ${i < order.status ? "text-success fw-bold" : "text-muted"}`}>
                              {step}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Rating Section */}
                      {order.status === 4 && (
                        <div className="mt-3">
                          <h6>Rate Your Order</h6>
                          <select
                            className="form-select"
                            value={ratings[order.id] || ""}
                            onChange={(e) => handleRatingChange(order.id, e.target.value)}
                          >
                            <option value="">Select Rating</option>
                            <option value="1">1 - Poor</option>
                            <option value="2">2 - Fair</option>
                            <option value="3">3 - Good</option>
                            <option value="4">4 - Very Good</option>
                            <option value="5">5 - Excellent</option>
                          </select>
                        </div>
                      )}

                      {/* Support Section */}
                      <div className="mt-3 text-end">
                        <button className="btn btn-warning support-btn" onClick={() => setIsChatOpen(true)}>
                          Need Help? Contact Support
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Chatbot Section */}
      {isChatOpen && (
        <div className="chat-container position-fixed bottom-5 end-5 p-3 bg-light rounded shadow">
          <div className="chat-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Support Chat</h5>
            <button className="btn btn-sm btn-danger" onClick={() => setIsChatOpen(false)}>✖</button>
          </div>
          <div className="chat-box">
            <p className="text-muted">Hello! How can we assist you today?</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Orders;
