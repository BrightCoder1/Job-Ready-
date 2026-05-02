// ContactForm.jsx

import React from "react";
import "./css/ContactForm.css";

import { FaHome } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="contact-container">
      {/* Left Side Form */}
      <div className="contact-left">
        <h1>Get in Touch</h1>

        <form className="contact-form">
          <textarea
            placeholder="Enter Message"
            rows="7"
          ></textarea>

          <div className="input-row">
            <input type="text" placeholder="Enter your name" />
            <input type="email" placeholder="Email" />
          </div>

          <input
            type="text"
            placeholder="Enter Subject"
            className="subject-input"
          />

          <button type="submit">SEND</button>
        </form>
      </div>

      {/* Right Side Info */}
      <div className="contact-right">
        <div className="info-box">
          <FaHome className="icon" />

          <div>
            <h3>Buttonwood, California.</h3>
            <p>Rosemead, CA 91770</p>
          </div>
        </div>

        <div className="info-box">
          <FaMobileAlt className="icon" />

          <div>
            <h3>+1 253 565 2365</h3>
            <p>Mon to Fri 9am to 6pm</p>
          </div>
        </div>

        <div className="info-box">
          <FaEnvelope className="icon" />

          <div>
            <h3>support@colorlib.com</h3>
            <p>Send us your query anytime!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;