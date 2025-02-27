import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the backend to send the reset password email
      const response = await axios.post('https://twiga-backend.onrender.com/forgot_password', { email });

      // Handle success response
      setMessage(response.data.message);
      setError(""); // Clear any previous errors

    } catch (err) {
      if (err.response && err.response.data) {
        // Handling specific error returned from the backend (like unregistered email)
        if (err.response.data.error === "Email not found") {
          setError("No account found with this email. Please check the email or register.");
        } else {
          setError("There was an issue with the email provided. Please try again.");
        }
      } else {
        // Fallback error message in case of network or other unexpected errors
        setError("Something went wrong. Please try again later.");
      }
      setMessage(""); // Clear success message if there is an error
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card p-4 shadow-lg w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center text-success fw-bold mb-3">Forgot Password</h2>
        <p className="text-center text-muted mb-4">Enter your email to reset your password.</p>

        {/* Displaying messages */}
        {message && <p className="text-center text-success fw-bold">{message}</p>}
        {error && <p className="text-center text-danger fw-bold">{error}</p>}

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
