import React, { useState, useEffect } from "react";
import ME from "../../assets/me.jpg";
import CV from "../../assets/cv.pdf";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";

const roles = [
  "Senior Backend Engineer",
  "Platform Architect",
  "Technology Entrepreneur",
  "Financial Systems Specialist",
];

export default function Header() {
  const [displayed, setDisplayed] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), 65);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), 35);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  useEffect(() => {
    setDisplayed(roles[roleIdx].slice(0, charIdx));
  }, [charIdx, roleIdx]);

  return (
    <section id="home" className="hero">
      <div className="hero-ambient" />
      <div className="hero-container">
        {/* Left: Text Content */}
        <div className="hero-content">
          <div className="hero-tag animate-fade-up">
            <span className="dot" />
            Available for Senior Roles & Partnerships
          </div>

          <h1 className="hero-headline animate-fade-up delay-1">
            Building{" "}
            <span className="gradient-text">Reliable Systems</span>
            <br />
            for Financial Services
            <br />& Real Businesses
          </h1>

          <p className="hero-description animate-fade-up delay-2">
            <span
              style={{
                color: "var(--accent-indigo)",
                fontWeight: 600,
                borderRight: "2px solid var(--accent-indigo)",
                paddingRight: "3px",
              }}
            >
              {displayed}
            </span>
            <br />
            <br />
            Senior Backend &amp; Platform Engineer specializing in
            transaction-intensive systems, cloud-native infrastructure,
            and multi-tenant SaaS.
          </p>

          <div className="hero-cta animate-fade-up delay-3">
            <a href="#work" className="btn btn-primary">
              View Case Studies <HiArrowRight />
            </a>
            <a href={CV} download className="btn btn-outline">
              Download CV
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Talk
            </a>
          </div>

          <div className="hero-stats animate-fade-up delay-4">
            <div>
              <div className="hero-stat-number">5+</div>
              <div className="hero-stat-label">Years Building</div>
            </div>
            <div>
              <div className="hero-stat-number">3</div>
              <div className="hero-stat-label">Ventures Co-Founded</div>
            </div>
            <div>
              <div className="hero-stat-number">∞</div>
              <div className="hero-stat-label">Transactions Processed</div>
            </div>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="hero-visual">
          <div className="hero-socials">
            <a
              href="https://linkedin.com/in/tobi-oladele-b42395124/"
              target="_blank"
              rel="noreferrer"
              className="hero-social-link"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/tobiadedoyin"
              target="_blank"
              rel="noreferrer"
              className="hero-social-link"
            >
              <BsGithub />
            </a>
          </div>

          <div className="hero-photo-wrapper">
            <img src={ME} alt="Tobi Oladele — Senior Backend Engineer" />
          </div>

          <div className="hero-photo-badge">
            <div style={{ fontSize: "0.9rem", marginBottom: "0.2rem" }}>🏗️</div>
            <div>Systems Builder</div>
            <div style={{ color: "var(--accent-emerald)", marginTop: "0.15rem" }}>
              & Tech Entrepreneur
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
