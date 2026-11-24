import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/Nav";
import Capabilities from "./components/Capabilities";
import CaseStudies from "./components/CaseStudies";
import Ventures from "./components/Ventures";
import OpenMinds from "./components/OpenMinds";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <Capabilities />
      <CaseStudies />
      <Ventures />
      <OpenMinds />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
