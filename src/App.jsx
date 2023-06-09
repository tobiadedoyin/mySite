import React from "react";
import Header from "./components/header/Header";
import About from "./components/About";
import Nav from "./components/Nav";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Potfolio from "./components/Potfolio";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Header />
      <hr />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Potfolio />
      <Contact />
      <Footer />
    </>
  );
}
