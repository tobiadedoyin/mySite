import React from "react";
import { CiBookmarkCheck } from "react-icons/ci";

export default function Services() {
  return (
    <section id="services">
      <h5>What i offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Technical Writing</h3>
          </div>
          <ul className="service__list">
            <li>
              <CiBookmarkCheck className="service__list-icon" />
              <p>Technical documention </p>
            </li>
            <li>
              <CiBookmarkCheck className="service__list-icon" />
              <p>Formulation of users story</p>
            </li>
            <li>
              <CiBookmarkCheck className="service__list-icon" />
              <p>API documention</p>
            </li>
          </ul>
        </article>
        {/* web development */}
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <CiBookmarkCheck className="service__list-icon" />
              <p>React Native</p>
            </li>
            <li>
              <CiBookmarkCheck className="service__list-icon" />
              <p>React js</p>
            </li>
            <li>
              <CiBookmarkCheck className="service__list-icon" />
              <p>Figma design interpretation to code</p>
            </li>
          </ul>
        </article>
        {/* e */}
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <CiBookmarkCheck className="service__list-icon" />
              <p>Generating Endpoints </p>
            </li>
            <li>
              <CiBookmarkCheck className="service__list-icon" />
              <p>Testing of Endpoints</p>
            </li>
            <li>
              <CiBookmarkCheck className="service__list-icon" />
              <p>Server Security</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
