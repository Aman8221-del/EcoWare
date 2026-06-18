import React from "react";
// import "./Style.css";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Products from "./Components/Products";
import Workprocess from "./Components/Workprocess";
import About from "./Components/About";
import Reviews from "./Components/Reviews";
import Footer from "./Components/Footer";

const App = () => {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Features/>
  <Products/>
  <Workprocess/>
  <About/>
  <Reviews/>
  <Footer/>
  
   </>
  );
};

export default App;
