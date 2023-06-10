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
            Highly skilled full stack Developer with years of experience in
            optimizing and deploying high-performance applications. Proven track
            record in improving system performance by up to 50%, reducing
            development time by 25%, and increasing team productivity by 15%.
            Collaborative team player with expertise in microservices
            architecture, RESTful API optimization, and data protection
            protocols..
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
