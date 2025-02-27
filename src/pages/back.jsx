import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { CartContext } from "../pages/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";

const Orders = () => {
  const { orders = [] } = useContext(CartContext);

  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <Navbar />
      <div className="container flex-grow-1 py-4">
        <h1 className="text-center text-success fw-bold mb-4">Order Tracking</h1>

        <div className="card shadow-sm p-4">
          {orders.length === 0 ? (
            <div className="text-center">
              <p className="fs-5 text-muted">No orders placed yet. Start shopping now!</p>
              <div className="mx-auto" style={{ maxWidth: "300px" }}>
                <DotLottieReact
                  src="https://lottie.host/866f4773-933a-45d7-960c-886c67527c8e/aFvVks35hQ.lottie"
                  loop
                  autoplay
                  style={{ width: "400px", height: "300px" }}
                />
              </div>
            </div>
          ) : (
            <div className="row g-3">
              {orders.map((order, index) => (
                <div key={index} className="col-12">
                  <div className="card border-secondary">
                    <div className="card-body">
                      <h5 className="card-title text-success">Order #{order.id}</h5>
                      <p className="text-muted">📅 Placed on: <strong>{order.date}</strong></p>
                      <p className="fs-5 fw-bold">💰 Total: Ksh {order.totalPrice}</p>

                      {/* Order Tracking Progress */}
                      <h6 className="mt-3">Order Status:</h6>
                      <div className="progress mb-3">
                        <div
                          className={`progress-bar ${order.status >= 1 ? "bg-success" : "bg-secondary"}`}
                          style={{ width: "25%" }}
                        >
                          Order Placed
                        </div>
                        <div
                          className={`progress-bar ${order.status >= 2 ? "bg-success" : "bg-secondary"}`}
                          style={{ width: "25%" }}
                        >
                          Processing
                        </div>
                        <div
                          className={`progress-bar ${order.status >= 3 ? "bg-success" : "bg-secondary"}`}
                          style={{ width: "25%" }}
                        >
                          Shipped
                        </div>
                        <div
                          className={`progress-bar ${order.status >= 4 ? "bg-success" : "bg-secondary"}`}
                          style={{ width: "25%" }}
                        >
                          Delivered
                        </div>
                      </div>

                      {/* Order Status Steps */}
                      <div className="d-flex justify-content-between">
                        {["Order Placed", "Processing", "Shipped", "Delivered"].map((step, i) => (
                          <div key={i} className="text-center">
                            <div
                              className={`rounded-circle text-white fw-bold d-flex align-items-center justify-content-center ${
                                i <= order.status ? "bg-success" : "bg-secondary"
                              }`}
                              style={{ width: "40px", height: "40px" }}
                            >
                              {i + 1}
                            </div>
                            <p className={`mt-1 ${i <= order.status ? "text-success fw-bold" : "text-muted"}`}>
                              {step}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Orders;
