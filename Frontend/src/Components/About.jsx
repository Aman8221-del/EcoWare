import React from "react";
import "../Style/about.css";
import aboutImg from "../assets/about-image.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-image">
        <img src={aboutImg} alt="EcoWare Team" />
      </div>

      <div className="about-content">
        <span className="section-tag">ABOUT US</span>

        <h2>Building a Greener Future With Sustainable Solutions</h2>

        <p>
          EcoWare Solutions is dedicated to providing high-quality biodegradable
          tableware and packaging products that help businesses reduce their
          environmental footprint.
        </p>

        <p>
          We partner with restaurants, wholesalers, retailers, and eco-conscious
          brands to deliver sustainable alternatives without compromising on
          quality, durability, or design.
        </p>

        <div className="mission-card">
          <h4>Our Mission</h4>
          <p>
            To replace single-use plastics with innovative, eco-friendly
            solutions that contribute to a cleaner and greener planet.
          </p>
        </div>

        <div className="stats-container">
          <div className="stat-card">
            <h3>500+</h3>
            <p>Business Clients</p>
          </div>

          <div className="stat-card">
            <h3>50M+</h3>
            <p>Products Delivered</p>
          </div>

          <div className="stat-card">
            <h3>100%</h3>
            <p>Eco-Friendly Materials</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
