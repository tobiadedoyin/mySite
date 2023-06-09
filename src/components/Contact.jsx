import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

export default function Contact() {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <a
              href="mailto:oladeletobiadedoyin@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <a
              href="https://wa.me/23408169686880?text=Hello%2C%20My%20Name%20is%20Oladele%20Tobi%2C%20%20I%20am%20a%20full%20stack%20developer%2C%20How%20can%20i%20be%20of%20help."
              target="_blank"
              rel="noreferrer"
            >
              send a message
            </a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder="FULL NAME" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            type="textarea"
            name="message"
            placeholder="Enter your message"
            cols="30"
            rows="10"
            required
          ></textarea>
          <button type="submit" className="btn btn__submit">
            send message
          </button>
        </form>
      </div>
    </section>
  );
}
