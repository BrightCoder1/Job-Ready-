// MyJob.jsx
import React from "react";
import "./css/MyJob.css";

const jobs = [
    {
        id: 1,
        company: "Google",
        role: "Frontend Developer",
        location: "Bangalore, India",
        status: "Applied",
    },
    {
        id: 2,
        company: "Amazon",
        role: "MERN Stack Developer",
        location: "Hyderabad, India",
        status: "Interview",
    },
    {
        id: 3,
        company: "Microsoft",
        role: "React Developer",
        location: "Noida, India",
        status: "Selected",
    },
    {
        id: 4,
        company: "Infosys",
        role: "Backend Developer",
        location: "Pune, India",
        status: "Rejected",
    },
];

const MyLatestJob = () => {
    return (
        <div className="myjob-page">

            <div className="myjob-header">
                <h1>My Jobs</h1>
                <p>Track your applied jobs and application status</p>
            </div>

            <div className="myjob-container">

                {jobs.map((job) => (
                    <div className="job-card" key={job.id}>

                        <div className="job-top">
                            <h2>{job.company}</h2>

                            <span
                                className={`status ${job.status.toLowerCase()}`}
                            >
                                {job.status}
                            </span>
                        </div>

                        <div className="job-detail">
                            <p>
                                <strong>Role:</strong> {job.role}
                            </p>

                            <p>
                                <strong>Location:</strong> {job.location}
                            </p>
                        </div>

                        <button className="view-btn">
                            View Details
                        </button>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default MyLatestJob;