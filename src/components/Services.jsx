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
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <CiBookmarkCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
            <li>
              <CiBookmarkCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <CiBookmarkCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit</p>
            </li>
          </ul>
        </article>
        {/* web development */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <CiBookmarkCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <CiBookmarkCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
            <li>
              <CiBookmarkCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <CiBookmarkCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit</p>
            </li>
          </ul>
        </article>
        {/* e */}
        <article className="service">
          <div className="service__head">
            <h3>TECHNICAL WRITING</h3>
          </div>
          <ul className="service__list">
            <li>
              <CiBookmarkCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <CiBookmarkCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
            <li>
              <CiBookmarkCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <CiBookmarkCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
