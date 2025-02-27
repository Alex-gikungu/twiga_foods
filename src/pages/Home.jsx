import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/home.css";
import { products } from "./Products";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { CartContext } from "../pages/CartContext";

const Home = () => {
  const { addToCart } = useContext(CartContext);
  const [hotDeals, setHotDeals] = useState([]);
  const [expandedProduct, setExpandedProduct] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const deals = products.filter((product) => product.rating >= 4.5);
    setHotDeals(deals);
  }, []);

  return (
    <div className="home-background">
      <div className="home-overlay"></div>
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <header className="home-header">
          <h1>Welcome to Twiga Foods</h1>
          <p>Your one-stop shop for fresh and affordable produce.</p>
        </header>

        <section className="home-hero">
          <h2>Order Fresh Produce with Ease</h2>
          <p>Browse our wide range of products, place your order, and enjoy fast delivery straight to your doorstep.</p>
          <div className="cta-buttons">
            <Link to="/products">Browse Products</Link>
            <Link to="/orders">Track Orders</Link>
          </div>
        </section>

        <section className="home-hot-deals">
          <div className="hot-deals-animation">
            <DotLottieReact
              src="https://lottie.host/daf7327c-aae6-4571-8939-fa420edaa4f7/UZqG6GHbrs.lottie"
              loop
              autoplay
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          <h3>Hot Deals</h3>
          <div className="hot-deals-container">
            {hotDeals.length > 0 ? (
              hotDeals.map((deal) => (
                <div key={deal.id} className="hot-deal-item">
                  <img src={deal.image} alt={deal.name} />
                  <h4>{deal.name}</h4>
                  <p>Price: KES {deal.price}</p>
                  <p>Rating: {deal.rating} ⭐</p>
                  {expandedProduct === deal.id ? (
                    <div>
                      <p>Category: {deal.category}</p>
                      <div className="reviews">
                        <h5>Reviews:</h5>
                        {deal.reviews.length > 0 ? (
                          deal.reviews.map((review, index) => (
                            <p key={index}>
                              <strong>{review.user}:</strong> {review.comment}
                            </p>
                          ))
                        ) : (
                          <p>No reviews yet.</p>
                        )}
                      </div>
                      <button onClick={() => addToCart(deal)} className="buy-now">
                        Add to Cart
                      </button>
                    </div>
                  ) : (
<button onClick={() => setExpandedProduct(deal.id)} className="view-details">
  View Details
</button>
                  )}
                </div>
              ))
            ) : (
              <p>No hot deals available.</p>
            )}
          </div>
        </section>

        <section className="home-features">
          <h3>Why Choose Twiga Foods?</h3>
          <div className="feature-grid">
            <div className="feature-card">
              <h4>Fresh Produce</h4>
              <p>We source directly from farmers to ensure the freshest products.</p>
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
      <Footer />
    </div>
  );
};

export default Home;
