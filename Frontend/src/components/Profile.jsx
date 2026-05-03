// Profile.jsx
import React from "react";
import LeftNavbar from "./LeftNavbar";
import "./css/Profile.css";

const Profile = () => {
    return (
        <div className="profile-page">
            <LeftNavbar />
            <div className="profile-content">
                <div className="profile-card">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt="profile"
                        className="profile-image"
                    />

                    <h2>Vishal Sharma</h2>
                    <p className="profile-role">Full Stack Web Developer</p>

                    <div className="profile-details">
                        <div className="detail-box">
                            <h4>Email</h4>
                            <p>vishal@gmail.com</p>
                        </div>

                        <div className="detail-box">
                            <h4>Phone</h4>
                            <p>+91 9876543210</p>
                        </div>

                        <div className="detail-box">
                            <h4>Location</h4>
                            <p>Meerut, India</p>
                        </div>

                        <div className="detail-box">
                            <h4>Experience</h4>
                            <p>Fresher</p>
                        </div>
                    </div>

                    <button className="edit-btn">Edit Profile</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;