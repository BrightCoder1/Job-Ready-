import React from "react";
import "./css/Dashboard.css";

import {
    FaBriefcase,
    FaUserCheck,
    FaBuilding,
    FaBell,
    FaArrowUp,
} from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="dashboard-page">
            {/* Top Header */}

            <div className="dashboard-header">
                <div>
                    <h1>Dashboard</h1>
                    <p>
                        Welcome back! Track your job portal activities
                        here.
                    </p>
                </div>

                <button className="post-job-btn">
                    + Post New Job
                </button>
            </div>

            {/* Stats Cards */}

            <div className="dashboard-cards">
                {/* Card 1 */}

                <div className="dashboard-card">
                    <div className="card-top">
                        <div className="card-icon jobs-icon">
                            <FaBriefcase />
                        </div>

                        <span className="growth">
                            <FaArrowUp />
                            12%
                        </span>
                    </div>

                    <h2>1,245</h2>

                    <p>Total Jobs</p>
                </div>

                {/* Card 2 */}

                <div className="dashboard-card">
                    <div className="card-top">
                        <div className="card-icon applicants-icon">
                            <FaUserCheck />
                        </div>

                        <span className="growth">
                            <FaArrowUp />
                            18%
                        </span>
                    </div>

                    <h2>860</h2>

                    <p>Applications</p>
                </div>

                {/* Card 3 */}

                <div className="dashboard-card">
                    <div className="card-top">
                        <div className="card-icon company-icon">
                            <FaBuilding />
                        </div>

                        <span className="growth">
                            <FaArrowUp />
                            8%
                        </span>
                    </div>

                    <h2>95</h2>

                    <p>Companies</p>
                </div>

                {/* Card 4 */}

                <div className="dashboard-card">
                    <div className="card-top">
                        <div className="card-icon notify-icon">
                            <FaBell />
                        </div>

                        <span className="growth">
                            <FaArrowUp />
                            5%
                        </span>
                    </div>

                    <h2>24</h2>

                    <p>Notifications</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;