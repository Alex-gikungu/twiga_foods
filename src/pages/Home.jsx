import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/home.css"; // Import the custom CSS file

const Home = () => {
  return (
    <div className="home-background">
      {/* Overlay for better readability */}
      <div className="home-overlay"></div>

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        {/* Header Section */}
        <header className="home-header">
          <h1>Welcome to Twiga Foods</h1>
          <p>Your one-stop shop for fresh and affordable produce.</p>
        </header>

        {/* Hero Section */}
        <section className="home-hero">
          <h2>Order Fresh Produce with Ease</h2>
          <p>
            Browse our wide range of products, place your order, and enjoy fast
            delivery straight to your doorstep.
          </p>
          <div className="cta-buttons">
            <Link to="/products">Browse Products</Link>
            <Link to="/orders">Track Orders</Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="home-features">
          <h3>Why Choose Twiga Foods?</h3>
          <div className="feature-grid">
            <div className="feature-card">
              <h4>Fresh Produce</h4>
              <p>
                We source directly from farmers to ensure the freshest products.
              </p>
            </div>
            <div className="feature-card">
              <h4>Fast Delivery</h4>
              <p>Get your orders delivered quickly and reliably.</p>
            </div>
            <div className="feature-card">
              <h4>Easy Payments</h4>
              <p>Pay securely with M-Pesa, PayPal, or credit cards.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;