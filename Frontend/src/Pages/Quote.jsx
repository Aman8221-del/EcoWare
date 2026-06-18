import React, { useState } from "react";
import "../Style/quote.css";
import axios from "axios";

const Productstype = [
  { name: "Plates" },
  { name: "Cups" },
  { name: "Cutlery" },
  { name: "Bowls" },
  { name: "Straws" },
  { name: "Trays" },
];

const GetQuote = ({ setshowForm }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [product, setProduct] = useState();
  const [message, setMessage] = useState();

  const handelSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email");
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10 digit phone number");
      return;
    }

    try {
      const res = await axios.post("https://ecoware-backend.onrender.com/api/quotes", {
        name,
        email,
        phone,
        product,
        message,
      });
      alert(res.data.message);
      window.location.href = "/";
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <div className="modal-overlay">
      <form onSubmit={handelSubmit} className="modal-form">
        <h2 className="form-title">Get a Free Quote</h2>

        <input
          onChange={(e) => setName(e.target.value)}
          name="name"
          placeholder="Name"
          required
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="Email"
          required
        />
        <input
          onChange={(e) => setPhone(e.target.value)}
          name="phone"
          
          placeholder="Phone"
          required
        />

        <select onChange={(e) => setProduct(e.target.value)}>
          <option value="">Select Product</option>
          {Productstype.map((item, index) => (
            <option key={item.index} value={item.index}>
              {item.name}
            </option>
          ))}
        </select>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          name="message"
          placeholder="Requirement"
          required
        ></textarea>

        <div className="form-actions">
          <button type="submit" className="save-btn">
            Submit
          </button>

          <button
            type="button"
            className="cancel-btn"
            onClick={() => setshowForm(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default GetQuote;
