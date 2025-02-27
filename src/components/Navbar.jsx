import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { CartContext } from "../pages/CartContext";
import { AuthContext } from "../AuthContext"; // Import AuthContext
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { isAuthenticated, logout } = useContext(AuthContext); // Get auth state

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">Twiga Foods</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/orders">Orders</Link>
            </li>

            <li className="nav-item position-relative">
              <Link className="nav-link" to="/cart">
                <DotLottieReact
                  src="https://lottie.host/d07f0871-fbf6-4808-8a1c-1affe3d8bb78/bowuQQP9sO.lottie"
                  loop
                  autoplay
                  style={{ width: "80px", height: "80px" }}
                />
                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                  {cart.length}
                </span>
              </Link>
            </li>

            {isAuthenticated ? (
              <li className="nav-item">
                <button onClick={logout} className="btn btn-outline-danger ms-3">Logout</button>
              </li>
            ) : (
              <li className="nav-item d-flex">
                <Link className="btn btn-outline-primary me-2" to="/login">Login</Link>
                <Link className="btn btn-primary" to="/register">Register</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
