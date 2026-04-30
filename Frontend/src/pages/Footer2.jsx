// Footer2.jsx

import React from "react";
import "./css/Footer.css";
import { FaHeart, FaFacebookF, FaTwitter, FaGlobe } from "react-icons/fa";

const Footer2 = () => {
  return (
    <div className="footer2">
      <div className="footer2-container">

        {/* Left Side */}
        <div className="footer2-left">
          <p>
            Copyright ©2026 All rights reserved | This is made with by <span> Vishal Kumar</span>
          </p>
        </div>

        <div className="footer2-right">
          <a href="/">
            <FaFacebookF />
          </a>

          <a href="/">
            <FaTwitter />
          </a>

          <a href="/">
            <FaGlobe />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Footer2;