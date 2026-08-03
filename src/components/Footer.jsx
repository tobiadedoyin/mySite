import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-brand-name">Tobi Oladele</div>
            <div className="footer-brand-role">
              Senior Backend & Platform Engineer · Co-Founder, Bemfot
            </div>
          </div>
          <div className="footer-links">
            <a href="#home" className="footer-link">Home</a>
            <a href="#capabilities" className="footer-link">Capabilities</a>
            <a href="#work" className="footer-link">Case Studies</a>
            <a href="#ventures" className="footer-link">Ventures</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} Tobi Oladele. Systems Builder & Technology Entrepreneur.
          </p>
          <div className="footer-socials">
            <a
              href="https://linkedin.com/in/tobi-oladele-b42395124/"
              target="_blank"
              rel="noreferrer"
              className="footer-social"
              title="LinkedIn"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/tobiadedoyin"
              target="_blank"
              rel="noreferrer"
              className="footer-social"
              title="GitHub"
            >
              <BsGithub />
            </a>
            <a
              href="mailto:oladeletobiadedoyin@gmail.com"
              className="footer-social"
              title="Email"
            >
              <AiOutlineMail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
