// MyJob.jsx

import React from "react";
import "./css/MyJobList.css";

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
      {/* Header */}

      <div className="myjob-header">
        <h1>My Jobs</h1>

        <p>Track your applied jobs and application status</p>
      </div>

      {/* Job Container */}

      <div className="myjob-container">
        {jobs.map((job) => (
          <div className="job-card" key={job.id}>
            {/* Top */}

            <div className="job-top">
              <h2>{job.company}</h2>

              <span className={`status ${job.status.toLowerCase()}`}>
                {job.status}
              </span>
            </div>

            {/* Job Details */}

            <div className="job-detail">
              <div className="detail-box">
                <h4>Role</h4>
                <p>{job.role}</p>
              </div>

              <div className="detail-box">
                <h4>Location</h4>
                <p>{job.location}</p>
              </div>
            </div>

            {/* Button */}

            <button className="view-btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyLatestJob;