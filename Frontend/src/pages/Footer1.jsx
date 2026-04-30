// Footer.jsx

import React from "react";
import "./css/Footer.css";
import { FaPaperPlane } from "react-icons/fa";

const Footer1 = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About */}
        <div className="footer-box">
          <h2>ABOUT US</h2>
          <p>
            Heaven fruitful doesn't cover lesser days appear creeping
            seasons so behold.
          </p>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h2>CONTACT INFO</h2>

          <p>
            Address :Your address goes here,
            your demo address.
          </p>

          <p>Phone : +8880 44338899</p>

          <p>Email : vs123@gmail.com</p>
        </div>

        {/* Important Links */}
        <div className="footer-box">
          <h2>IMPORTANT LINK</h2>

          <ul>
            <li><a href="/">View Project</a></li>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">Testimonial</a></li>
            <li><a href="/">Properties</a></li>
            <li><a href="/">Support</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-box">
          <h2>NEWSLETTER</h2>

          <p>
            Heaven fruitful doesn't over lesser in
            days. Appear creeping.
          </p>
          
        </div>

      </div>
    </footer>
  );
};

export default Footer1;