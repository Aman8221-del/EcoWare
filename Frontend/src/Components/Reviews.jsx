import React from "react";
import "../Style/reviews.css";
import { FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    id:1,
    name: "Rahul Sharma",
    role: "Product Manager",
    company: "GreenBite Foods",
    review:
      "EcoWare Solutions has consistently delivered exceptional biodegradable products. Their custom branding capabilities helped us strengthen our market presence while maintaining our sustainability commitments.",
  },

  {
    id:2,
    name: "Aman kumar",
    role: "Operations Director",
    company: "FreshServe Catering",
    review:
      "From product quality to timely delivery, every aspect of their service has exceeded expectations. A trusted partner for our large-scale packaging requirements.",
  },
  {
    id:3,
    name: "Andres",
    role: "Founder & CEO",
    company: "EcoPack",
    review:
      "Their sustainable packaging solutions allowed us to expand our eco-friendly product portfolio. Professional, reliable, and highly innovative.",
  },
];

const Reviews = () => {
  return (
    <section className="reviews" id="reviews">
      <div className="section-header">
        <span>CLIENT TESTIMONIALS</span>
        <h2>Trusted By Businesses Worldwide</h2>
        <p>
          Hear what our partners say about our commitment to quality,
          sustainability, and exceptional service.
        </p>
      </div>

      <div className="reviews-grid">
        {reviews.map((rev) => (
          <div className="review-card" key={rev.id}>
            <FaQuoteLeft className="quote-icon" />
            <p className="review-text">{rev.review}</p>
            <div className="review-footer">
              <div className="avatar">{rev.name.charAt(0)}</div>

              <div>
                <h4>{rev.name}</h4>
                <span>
                  {rev.role} • {rev.company}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
