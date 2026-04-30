// FeatureJob.jsx
import React from "react";
import "./css/FeatureJob.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const jobs = [
    {
        id: 1,
        logo: "Ziggo",
        title: "Digital Marketer",
        company: "Creative Agency",
        location: "Athens, Greece",
        salary: "$3500 - $4000",
        type: "Full Time",
        time: "7 hours ago",
    },
    {
        id: 2,
        logo: "elisa",
        title: "Digital Marketer",
        company: "Creative Agency",
        location: "Athens, Greece",
        salary: "$3500 - $4000",
        type: "Full Time",
        time: "7 hours ago",
    },
    {
        id: 3,
        logo: "elisa",
        title: "Digital Marketer",
        company: "Creative Agency",
        location: "Athens, Greece",
        salary: "$3500 - $4000",
        type: "Full Time",
        time: "7 hours ago",
    },
];

const FeatureJob = () => {
    return (
        <div className="feature-job">
            <p className="small-heading">RECENT JOB</p>
            <h1 className="main-heading">Featured Jobs</h1>

            <div className="job-container">
                {jobs.map((job) => (
                    <div className="job-card" key={job.id}>
                        <div className="job-left">
                            <div className="job-logo">
                                <h2>{job.logo}</h2>
                            </div>

                            <div className="job-info">
                                <h2>{job.title}</h2>

                                <div className="job-details">
                                    <span>{job.company}</span>

                                    <span className="location">
                                        <FaMapMarkerAlt />
                                        {job.location}
                                    </span>

                                    <span>{job.salary}</span>
                                </div>
                            </div>
                        </div>

                        <div className="job-right">
                            <button>{job.type}</button>
                            <p>{job.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureJob;