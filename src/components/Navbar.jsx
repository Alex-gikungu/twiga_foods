import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"; // Import custom CSS
import { CartContext } from "../pages/CartContext"; // Import the CartContext
import { DotLottieReact } from "@lottiefiles/dotlottie-react"; // Import Lottie animation

const Navbar = () => {
  const { cart } = useContext(CartContext); // Access cart from context
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          Twiga Foods
        </Link>

        {/* Navbar Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/orders">
                Orders
              </Link>
            </li>

            {/* Cart Icon with Lottie Animation */}
            <li className="nav-item position-relative">
              <Link className="nav-link nav-hover" to="/cart">
                <DotLottieReact
                  src="https://lottie.host/d07f0871-fbf6-4808-8a1c-1affe3d8bb78/bowuQQP9sO.lottie"
                  loop
                  autoplay
                  style={{ width: "80px", height: "80px", marginRight: "5px" }}
                />
                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                  {cart.length} {/* Dynamically show cart count */}
                </span>
              </Link>
            </li>

            {/* Auth Buttons */}
            {isLoggedIn ? (
              <li className="nav-item">
                <button onClick={handleAuth} className="btn btn-outline-danger ms-3">
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item d-flex">
                <Link className="btn btn-outline-primary me-2" to="/login">
                  Login
                </Link>
                <Link className="btn btn-primary" to="/register">
                  Register
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
