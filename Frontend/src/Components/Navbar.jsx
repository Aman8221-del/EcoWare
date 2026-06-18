import React, { useState } from "react";
import "../Style/navbar.css";
import "../Style/quote.css";
import GetQuote from "../Pages/Quote";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForm, setshowForm] = useState(false);
  return (
    <>
      <header className="navbar">
        <div className="container">
          {/* Logo */}
          <div className="logo">🌱 EcoWare Solutions</div>

          {/* Desktop Navigation */}
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#process">Process</a>
            </li>
            <li>
              <a href="#reviews">Reviews</a>
            </li>

            <li>
              <button className="quote-btn" onClick={() => setshowForm(true)}>
                Get Quote
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
        </div>
      </header>

      {/* quote form  */}

      {showForm && <GetQuote setshowForm={setshowForm} />}
    </>
  );
};

export default Navbar;
