import React from "react";
import "../Style/workProcess.css";

const workSteps = [
  {
    number: 1,
    title: "Discovery & Consultation",
    desc: "We begin by understanding your business goals, product requirements and expected order volumes.",
  },
  {
    number: 2,
    title: "Product Design & Customization",
    desc: "Products and packaging are customized to match your brand identity and market needs.",
  },
  {
    number: 3,
    title: "Sustinable Manufacturing",
    desc: "Eco-friendly products are produced using responsibly sourced biodegradable materials.",
  },
  {
    number: 4,
    title: "Quality Assurance",
    desc: "Every product undergoes rigorous inspections to maintain the highest quality standards.",
  },
  {
    number: 5,
    title: "Packaging & Global Delivery",
    desc: "Orders are securely packed and delivered efficiently to customers across the globe.",
  },
];

const Workprocess = () => {
  return (
    <section className="work-section" id="process">
      <div className="section-header">
        <h2>How to Deliver Sustaniable Excellence</h2>
        <p>
         
          From understanding your requirements to delivering high-quality
          eco-friendly products, our process ensures efficiency, consistency,
          and customer satisfaction.
        </p>
      </div>

      <div className="workprocess-grid">
        {workSteps.map((work)=>(
            <div className="workprocess-card" key={work.number}>
            <div className="workprocess-number">{work.number}</div>
            <h3>{work.title}</h3>
            <p>{work.desc}</p>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Workprocess;
