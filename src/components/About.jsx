import React from "react";
import ME from "../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { FcLibrary } from "react-icons/fc";
import { AiOutlineUserAdd } from "react-icons/ai";

export default function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>Know me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h4>Experience</h4>
              <small>2+ years </small>
            </article>

            <article className="about__card">
              <AiOutlineUserAdd className="about__icon" />
              <h4>clients</h4>
              <small>30+ clients </small>
            </article>

            <article className="about__card">
              <FcLibrary className="about__icon" />
              <h4>Projects</h4>
              <small>15+ project </small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            itaque vel voluptas quos, eum ipsum nulla, dolor ad, sint alias
            necessitatibus possimus. Officia pariatur, omnis quod vitae
            asperiores vel maxime!
          </p>
          <a href="#contact" className="btn btn__primary">
            {" "}
            let's talk
          </a>
        </div>
      </div>
    </section>
  );
}
