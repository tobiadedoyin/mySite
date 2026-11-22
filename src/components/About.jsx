import React from "react";
import ME from "../assets/me.jpg";
import CV from "../assets/cv.pdf";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-container">
          <div className="about-photo-wrap">
            <div className="about-photo">
              <img src={ME} alt="Tobi Oladele" />
            </div>
            <div className="about-badge">
              <div className="about-badge-number">5+</div>
              <div className="about-badge-label">Years in Production</div>
            </div>
          </div>

          <div className="about-content">
            <div>
              <div className="section-label">About</div>
              <h2 className="section-title">
                Systems Builder.
                <br />Technology for Public Benefit.
              </h2>
            </div>

            <p className="about-text">
              I'm <strong style={{ color: "var(--text-primary)" }}>Tobi Oladele</strong> — a backend and platform engineer
              building financial infrastructure, payment systems, cloud-native
              services, and multi-tenant business platforms in Nigeria's fintech
              and proptech sectors.
            </p>

            <p className="about-text">
              I care about the public consequences of technical decisions:
              who controls data, who can access it, how consent is respected,
              and whether systems remain accountable to the people they serve.
              These questions increasingly shape my interest in privacy-aware
              engineering, data governance, and responsible AI.
            </p>

            <p className="about-text">
              Through Bemfot, I also help build technology ventures in real
              estate and agriculture. Working across software and real-world
              services has strengthened my focus on practical systems that
              address local needs and operate reliably in emerging-market
              contexts.
            </p>

            <div className="about-metrics">
              <div className="about-metric">
                <div className="about-metric-number">5+</div>
                <div className="about-metric-label">Years Building</div>
              </div>
              <div className="about-metric">
                <div className="about-metric-number">2</div>
                <div className="about-metric-label">Bemfot Ventures</div>
              </div>
              <div className="about-metric">
                <div className="about-metric-number">AI</div>
                <div className="about-metric-label">Responsible Technology</div>
              </div>
            </div>

            <div className="about-actions">
              <a href="#contact" className="btn btn-primary">
                Let's Talk
              </a>
              <a href={CV} download className="btn btn-outline">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
