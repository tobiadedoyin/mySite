import React from "react";
import ME from "../assets/me.jpg";
import CV from "../assets/cv.pdf";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-container">
          {/* Photo */}
          <div className="about-photo-wrap">
            <div className="about-photo">
              <img src={ME} alt="Tobi Oladele" />
            </div>
            <div className="about-badge">
              <div className="about-badge-number">5+</div>
              <div className="about-badge-label">Years in Production</div>
            </div>
          </div>

          {/* Content */}
          <div className="about-content">
            <div>
              <div className="section-label">About</div>
              <h2 className="section-title">
                Systems Builder.
                <br />Technology Entrepreneur.
              </h2>
            </div>

            <p className="about-text">
              I'm <strong style={{ color: "var(--text-primary)" }}>Tobi Oladele</strong> — a backend and platform engineer
              who has spent the last five years building financial infrastructure,
              payment systems, cloud-native services, and multi-tenant business
              platforms in Nigeria's fintech and proptech sectors.
            </p>

            <p className="about-text">
              My work lives at the intersection of rigorous engineering and real
              business outcomes. I don't just write code — I design systems that
              handle money, manage trust, and operate reliably under load. Whether
              that's a payment routing engine processing thousands of daily transactions,
              or a multi-tenant SaaS serving multiple businesses on shared infrastructure,
              I care deeply about correctness, observability, and long-term maintainability.
            </p>

            <p className="about-text">
              Beyond client and employment work, I co-found technology ventures through
              Bemfot — applying the same engineering rigour to markets I believe in:
              real estate and agriculture. This dual identity as engineer and founder
              shapes how I think about product, scalability, and the real cost of
              technical decisions.
            </p>

            <div className="about-metrics">
              <div className="about-metric">
                <div className="about-metric-number">5+</div>
                <div className="about-metric-label">Years Building</div>
              </div>
              <div className="about-metric">
                <div className="about-metric-number">3</div>
                <div className="about-metric-label">Ventures Co-Founded</div>
              </div>
              <div className="about-metric">
                <div className="about-metric-number">10+</div>
                <div className="about-metric-label">Production Systems</div>
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
