import React, { useState } from "react";
import "./css/MyJob.css";

import {
    FaSearch,
    FaMapMarkerAlt,
    FaBriefcase,
    FaMoneyBillWave,
} from "react-icons/fa";

const jobsData = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "TechNova",
        location: "Delhi",
        category: "Development",
        type: "Full Time",
        salary: "₹40,000 - ₹60,000",
    },
    {
        id: 2,
        title: "Backend Developer",
        company: "CodeCraft",
        location: "Noida",
        category: "Development",
        type: "Part Time",
        salary: "₹30,000 - ₹50,000",
    },
    {
        id: 3,
        title: "UI/UX Designer",
        company: "Creative Studio",
        location: "Mumbai",
        category: "Design",
        type: "Remote",
        salary: "₹35,000 - ₹55,000",
    },
    {
        id: 4,
        title: "Digital Marketing",
        company: "MarketPro",
        location: "Bangalore",
        category: "Marketing",
        type: "Full Time",
        salary: "₹25,000 - ₹45,000",
    },
    {
        id: 5,
        title: "React Developer",
        company: "SoftSolutions",
        location: "Pune",
        category: "Development",
        type: "Remote",
        salary: "₹50,000 - ₹80,000",
    },
];

const MyJobList = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [jobType, setJobType] = useState("All");
    const [sort, setSort] = useState("");

    // Filter Jobs

    const filteredJobs = jobsData
        .filter((job) =>
            job.title.toLowerCase().includes(search.toLowerCase())
        )
        .filter((job) =>
            category === "All" ? true : job.category === category
        )
        .filter((job) =>
            jobType === "All" ? true : job.type === jobType
        )
        .sort((a, b) => {
            if (sort === "A-Z") {
                return a.title.localeCompare(b.title);
            }

            if (sort === "Z-A") {
                return b.title.localeCompare(a.title);
            }

            return 0;
        });

    return (
        <div className="myjob-container">
            {/* Header */}

            <div className="myjob-header">
                <h1>Find Your Dream Job</h1>

                <p>Search and filter jobs according to your skills</p>
            </div>

            {/* Filter Section */}

            <div className="job-filter-section">

                {/* Search */}

                <div className="search-box">
                    <FaSearch className="search-icon" />

                    <input
                        type="text"
                        placeholder="Search jobs..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* Categories */}

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="All">All Categories</option>

                    <option value="Development">Development</option>

                    <option value="Design">Design</option>

                    <option value="Marketing">Marketing</option>
                </select>

                {/* Job Type */}

                <select
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                >
                    <option value="All">All Job Types</option>

                    <option value="Full Time">Full Time</option>

                    <option value="Part Time">Part Time</option>

                    <option value="Remote">Remote</option>
                </select>

                {/* Sort */}

                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                >
                    <option value="">Sort By</option>

                    <option value="A-Z">A - Z</option>

                    <option value="Z-A">Z - A</option>
                </select>

            </div>

            {/* Job Cards */}

            <div className="job-list">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job) => (
                        <div className="job-card" key={job.id}>
                            {/* Top */}

                            <div className="job-top">
                                <h2>{job.title}</h2>

                                <span>{job.type}</span>
                            </div>

                            {/* Company */}

                            <h3 className="job-company">{job.company}</h3>

                            {/* Job Info */}

                            <div className="job-info">
                                <p>
                                    <FaMapMarkerAlt />
                                    {job.location}
                                </p>

                                <p>
                                    <FaBriefcase />
                                    {job.category}
                                </p>

                                <p>
                                    <FaMoneyBillWave />
                                    {job.salary}
                                </p>
                            </div>

                            {/* Button */}

                            <button>Apply Now</button>
                        </div>
                    ))
                ) : (
                    <h2 className="no-job">No Jobs Found</h2>
                )}
            </div>
        </div>
    );
};

export default MyJobList;