import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("User  Registered:", formData);

    try {
      const response = await fetch("https://twiga-backend.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Registration successful:", data);
      
      // Redirect to login page after successful registration
      navigate("/login"); // Change this to your login route

    } catch (error) {
      console.error("Error during registration:", error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card p-4 shadow-lg w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center text-success fw-bold mb-3">Register</h2>
        <p className="text-center text-muted mb-4">Create a new Twiga Foods account.</p>

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

          {/* Phone Number Input */}
          <div className="mb-3">
            <label className="form-label fw-bold">Phone Number</label>
            <div className="input-group">
              <span className="input-group-text"><FaPhone /></span>
              <input
                type="tel"
                name="phone"
                className="form-control"
                placeholder="Enter your phone number"
                value={formData.phone}
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

          {/* Register Button */}
          <button type="submit" className="btn btn-success w-100">Register</button>

          {/* Sign-in Option */}
          <div className="text-center mt-3">
            <p className="mb-0">Already have an account? <a href="/login" className="text-success fw-bold">Sign In</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;