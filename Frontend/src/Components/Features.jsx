import React from "react";
import "../Style/features.css";
import { FaLeaf, FaBoxes, FaPaintBrush, FaGlobe } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      id:1,
      icon: <FaLeaf />,
      title: "Eco-Friendly Materials",
      description:
        "Made from biodegradable and sustainable materials that help reduce plastic waste.",
    },
    {  
      id:2,
      icon: <FaBoxes />,
      title: "Bulk Supply Capability",
      description:
        "Large-scale production capacity to meet wholesale and corporate demands.",
    },
    {
      id:3,
      icon: <FaPaintBrush />,
      title: "Custom Branding",
      description:
        "Personalized packaging and logo printing to strengthen your brand identity.",
    },
    {
      id:4,
      icon: <FaGlobe />,
      title: "Global Export",
      description:
        "Reliable worldwide shipping and export support for international businesses.",
    },
  ];

  return (
    <section className="features" id="features">
      <div className="section-header">
        <h2>Why Choose EcoWare Solutions?</h2>
        <p>
          Providing sustainable and high-quality tableware solutions for
          businesses worldwide.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature) => (
          <div className="feature-card" key={feature.id} >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
