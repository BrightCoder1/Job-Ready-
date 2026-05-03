// LeftNavbar.jsx
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaBriefcase,
  FaInfoCircle,
  FaBell,
  FaSignOutAlt,
} from "react-icons/fa";

import "./css/LeftNavbar.css";

const LeftNavbar = () => {

  const navigate = useNavigate();

  // Logout Function
  const handleLogout = () => {

    // Remove token or user data
    localStorage.removeItem("token");

    // Redirect to login page
    navigate("/signin");
  };

  return (
    <div className="left-navbar">

      {/* Logo Section */}
      <div className="logo-section">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="logo"
          className="logo"
        />
        <h2>JobPortal</h2>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <FaUserCircle className="nav-icon" />
          <span>Profile</span>
        </NavLink>

        <NavLink
          to="/myjobs"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <FaBriefcase className="nav-icon" />
          <span>Jobs</span>
        </NavLink>

        <NavLink
          to="/detail"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <FaInfoCircle className="nav-icon" />
          <span>Detail</span>
        </NavLink>

        <NavLink
          to="/notifications"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <FaBell className="nav-icon" />
          <span>Notifications</span>
        </NavLink>

      </div>

      {/* Logout Button */}
      <button className="logout-btn" onClick={handleLogout}>
        <FaSignOutAlt className="logout-icon" />
        Logout
      </button>

    </div>
  );
};

export default LeftNavbar;