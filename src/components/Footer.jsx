import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../styles/footer.css"; // Import the custom CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Section */}
        <div>
          <h3>About Twiga Foods</h3>
          <p>
            Twiga Foods is your trusted partner for fresh and affordable produce. We connect farmers directly to consumers, ensuring quality and sustainability.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3>Contact Us</h3>
          <ul>
            <li>Email: info@twigafoods.com</li>
            <li>Phone: +254 700 123 456</li>
            <li>Address: 123 Twiga Lane, Nairobi, Kenya</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="copyright">
        <p>© 2023 Twiga Foods. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;