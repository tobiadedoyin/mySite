import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        "service_z8m9vzd",
        "template_bjhgj8y",
        form.current,
        "91Q3l03Hg5y9ostBw"
      );
      setStatus("success");
      e.target.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-container">
          {/* Left: Info */}
          <div>
            <div className="section-label">Contact</div>
            <h2 className="contact-info-title">
              Let's Build
              <br />Something Serious
            </h2>
            <p className="contact-info-text">
              Whether you're hiring a senior backend engineer, exploring a
              technical partnership, or want to discuss one of my ventures —
              I'm open to the right conversations.
            </p>

            <div className="contact-options">
              <a
                href="mailto:oladeletobiadedoyin@gmail.com"
                className="contact-option"
              >
                <div className="contact-option-icon">
                  <AiOutlineMail />
                </div>
                <div>
                  <div className="contact-option-label">Email</div>
                  <div className="contact-option-value">
                    oladeletobiadedoyin@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/2348169686880"
                target="_blank"
                rel="noreferrer"
                className="contact-option"
              >
                <div className="contact-option-icon">
                  <BsWhatsapp />
                </div>
                <div>
                  <div className="contact-option-label">WhatsApp</div>
                  <div className="contact-option-value">+234 816 968 6880</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/oladeletobiadedoyin/"
                target="_blank"
                rel="noreferrer"
                className="contact-option"
              >
                <div className="contact-option-icon">
                  <BsLinkedin />
                </div>
                <div>
                  <div className="contact-option-label">LinkedIn</div>
                  <div className="contact-option-value">tobi-oladele</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="e.g. Senior Engineer Opportunity, Partnership"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                placeholder="Tell me what you're building..."
                rows="6"
                required
                className="form-textarea"
              />
            </div>

            {/* Status feedback */}
            {status === "success" && (
              <div className="form-feedback form-feedback--success">
                ✓ Message sent! I'll get back to you shortly.
              </div>
            )}
            {status === "error" && (
              <div className="form-feedback form-feedback--error">
                ✗ Something went wrong. Please email me directly instead.
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === "sending"}
              style={{ alignSelf: "flex-start" }}
            >
              {status === "sending" ? "Sending..." : "Send Message →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
