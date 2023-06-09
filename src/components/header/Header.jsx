import React from "react";
import CTA from "./CTA";
import Socials from "./Socials";
import ME from "../../assets/me.jpg";

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, my name is</h5>
        <h1>Tobi Oladele</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <Socials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
