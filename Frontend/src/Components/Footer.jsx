import React from "react";
import "../Style/footer.css";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* company */}
        <div className="footer-col">
          <h2 className="logo">🌱 EcoWare Solutions</h2>
          <p> Sustainable packaging solutions for a greener future.</p>
        </div>

        {/* Quick links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
        </div>

        {/* contact  */}

        <div className="footer-col">
          <h3>Contact</h3>
          <p>info@ecoware.com</p>
          <p>+91 98765 43210</p>
        </div>

        {/* social */}

        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <FaInstagram />
            <FaLinkedin />
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className="footer-bottom">© 2026 EcoWare. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
