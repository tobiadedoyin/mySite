import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";

export default function Socials() {
  return (
    <div>
      <div className="header__socials">
        <a
          href="https://linkedin.com/in/tobi-oladele-b42395124/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/tobiadedoyin"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://medium.com/@tobiadedoyin"
          target="_blank"
          rel="noreferrer"
        >
          <BsDribbble />
        </a>
      </div>
    </div>
  );
}
