import React from "react";
import "./App.css";
import Hero from "./component/Hero.js";
import Navbar from "./component/Navbar.js";
import About from "./component/About.js";
import Services from "./component/Services.js";
import Tours from "./component/Tours.js";
import Footer from "./component/Footer.js";
const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours/>
      <Footer/>
    </React.Fragment>
  );
};
export default App;
