import React, { useState, useContext } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext"; // Import AuthContext
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Get login function from context

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("User Logged In:", formData);

    try {
      const response = await fetch("https://twiga-backend.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Login successful:", data);

      login(); // Update global auth state
      navigate("/"); // Redirect to home page
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card p-4 shadow-lg w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center text-success fw-bold mb-3">Login</h2>
        <p className="text-center text-muted mb-4">Login to your Twiga Foods account.</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <div className="input-group">
              <span className="input-group-text"><FaEnvelope /></span>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <div className="input-group">
              <span className="input-group-text"><FaLock /></span>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-success w-100">Login</button>
        </form>

        {/* Forgot Password Link */}
        <div className="text-center mt-3">
          <p className="mb-0">
            <a href="/forgot-password" className="text-success fw-bold">Forgot Password?</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
