import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Logged In:", formData);
    // Handle login logic here
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card p-4 shadow-lg w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center text-success fw-bold mb-3">Login</h2>
        <p className="text-center text-muted mb-4">Login to your Twiga Foods account.</p>

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
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

          {/* Password Input */}
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

          {/* Forgot Password Link */}
          <div className="text-end mb-3">
            <a href="/forgot-password" className="text-success fw-bold">Forgot Password?</a>
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-success w-100">Login</button>

          {/* Register Option */}
          <div className="text-center mt-3">
            <p className="mb-0">Don't have an account? <a href="/register" className="text-success fw-bold">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
