// Notification.jsx
import React from "react";
import "./css/Notification.css";

const notifications = [
    {
        id: 1,
        name: "Rahul Sharma",
        email: "rahul@gmail.com",
        detail: "Your job application has been shortlisted.",
    },
    {
        id: 2,
        name: "Priya Verma",
        email: "priya@gmail.com",
        detail: "New interview schedule updated.",
    },
    {
        id: 3,
        name: "Aman Gupta",
        email: "aman@gmail.com",
        detail: "Your profile has received 5 new views.",
    },
    {
        id: 4,
        name: "Sneha Singh",
        email: "sneha@gmail.com",
        detail: "New job matching your skills is available.",
    },
];

const Notification = () => {
    return (
        <div className="notification-page">

            <div className="notification-header">
                <h1>Notifications</h1>
                <p>Check your latest updates and alerts</p>
            </div>

            <div className="notification-container">
                {notifications.map((item) => (
                    <div className="notification-card" key={item.id}>

                        <div className="notification-top">
                            <div className="notification-avatar">
                                {item.name.charAt(0)}
                            </div>

                            <div>
                                <h3>{item.name}</h3>
                                <p>{item.email}</p>
                            </div>
                        </div>

                        <div className="notification-detail">
                            <p>{item.detail}</p>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
};

export default Notification;