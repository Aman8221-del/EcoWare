import React from "react";
import "../Style/products.css";
import plates from "../assets/BagassePlates.png";
import bowls from "../assets/BagasseBowls.png";
import cutlery from "../assets/woodencutlery.png";
import cups from "../assets/paperCups.png";
import containers from "../assets/paperContainers.png";
import straws from "../assets/straws.png";
import trays from "../assets/trays.png";
import boxes from "../assets/boxes.png";

const products = [
  {
    id: 1,
    image: plates,
    title: "Bagasse Plates",
    desc: "Made from sugarcane fiber and fully biodegradable.",
  },
  {
    id: 2,
    image: bowls,
    title: "Bagasse Bowls",
    desc: "Eco-friendly bowls designed for hot and cold foods, offering strength without harming the environment.",
  },
  {
    id: 3,
    image: cups,
    title: "Paper Cups",
    desc: "High-quality recyclable cups suitable for serving hot and cold beverages in cafés, restaurants, and events.",
  },
  {
    id: 4,
    image:  cutlery ,
    title: "Wooden Cutlery",
    desc: "Premium disposable forks, spoons, and knives crafted from sustainable wood for a plastic-free dining experience.",
  },
  {
    id: 5,
    image: containers ,
    title: "Food Containers",
    desc: "Leak-resistant and compostable containers designed for takeaway, delivery, and food packaging needs.",
  },
  {
    id: 6,
    image: straws ,
    title: "Biodegradable Straws",
    desc: "Sustainable drinking straws that provide an eco-friendly alternative to traditional plastic straws.",
  },
  {
    id: 7,
    image: trays ,
    title: "Paper Food Trays",
    desc: "Lightweight and recyclable serving trays perfect for snacks, fast food, and outdoor catering events.",
  },
  {
    id: 8,
    image:  boxes,
    title: "Eco Takeaway Boxes",
    desc: "Environmentally responsible packaging boxes that keep food secure while reducing plastic waste.",
  },
];

const Products = () => {
  return (
    <section className="products" id="products">
      <div className="section-header">
        <h2>Our Sustainable Products</h2>
        <p>
          Discover eco-friendly tableware solutions designed for modern
          businesses and conscious brands.
        </p>
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-content">
              <h3>{product.title}</h3>
              <p>{product.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
