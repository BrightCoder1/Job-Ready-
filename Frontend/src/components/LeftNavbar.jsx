import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  FaTachometerAlt,
  FaBriefcase,
  FaInfoCircle,
  FaBell,
  FaUserCircle,
  FaPlusCircle,
  FaEnvelope,
  FaSignOutAlt,
} from "react-icons/fa";

import "./css/LeftNavbar.css";

const LeftNavbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/signin");
  };

  return (
    <div className="left-navbar">

      {/* Logo */}

      <div className="logo-section">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="logo"
          className="logo"
        />

        <h2>JobPortal</h2>
      </div>

      {/* Nav Links */}

      <div className="nav-links">

        {/* Dashboard */}

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <FaTachometerAlt className="nav-icon" />

          <span>Dashboard</span>
        </NavLink>

        {/* Jobs */}

        <NavLink
          to="/myjobs"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <FaBriefcase className="nav-icon" />

          <span>Jobs</span>
        </NavLink>

        {/* Job Detail */}

        <NavLink
          to="/jobdetail"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <FaInfoCircle className="nav-icon" />

          <span>Detail</span>
        </NavLink>

        {/* Notifications */}

        <NavLink
          to="/notifications"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <FaBell className="nav-icon" />

          <span>Notifications</span>
        </NavLink>

        {/* Profile */}

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <FaUserCircle className="nav-icon" />

          <span>Profile</span>
        </NavLink>

        {/* Post */}

        <NavLink
          to="/post"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <FaPlusCircle className="nav-icon" />

          <span>Post Job</span>
        </NavLink>

        {/* Mail */}

        <NavLink
          to="/mail"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <FaEnvelope className="nav-icon" />

          <span>Mail</span>
        </NavLink>

      </div>

      {/* Logout */}

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        <FaSignOutAlt className="logout-icon" />

        Logout
      </button>

    </div>
  );
};

export default LeftNavbar;