import React, { useState } from "react";
import "../Style/Hero.css";
import "../Style/quote.css";
import heroImage from "../assets/heroImage.png";
import GetQuote from "../Pages/Quote";

const Hero = () => {
  const [showForm, setshowForm] = useState(false);
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="hero-tag">🌱 Sustainable & Eco-Friendly</span>

          <h1>
            Sustainable Tableware
            <br />
            For Modern Businesses
          </h1>

          <p>
            EcoWare Solutions provides premium biodegradable tableware and
            eco-friendly packaging solutions for wholesalers, restaurants and
            conscious brands.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => setshowForm(true)}>
              Get Quote
            </button>

            <a href="#products" className="secondary-btn">
              View Products
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Eco Products" />
        </div>

        {showForm && <GetQuote setshowForm={setshowForm} />}
      </section>
    </>
  );
};

export default Hero;
