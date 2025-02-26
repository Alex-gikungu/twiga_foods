import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate password reset request
    setMessage("If this email exists in our system, you will receive a password reset link.");
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card p-4 shadow-lg w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center text-success fw-bold mb-3">Forgot Password</h2>
        <p className="text-center text-muted mb-4">Enter your email to reset your password.</p>

        {message && <p className="text-center text-success fw-bold">{message}</p>}
        
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
                value={email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-success w-100">Reset Password</button>

          {/* Back to Login */}
          <div className="text-center mt-3">
            <p className="mb-0">
              Remembered your password? <a href="/login" className="text-success fw-bold">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
