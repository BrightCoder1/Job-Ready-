import React from 'react';
import './css/JobList.css';

const jobs = [
    {
        id: 1,
        company: 'Ziggo',
        logo: 'https://themewagon.github.io/jobfinderportal/assets/img/icon/job-list1.png',
        title: 'Digital Marketer',
        category: 'Creative Agency',
        location: 'Athens, Greece',
        salary: '$3500 - $4000',
        type: 'Full Time',
        posted: '7 hours ago'
    },
    {
        id: 2,
        company: 'Elisa',
        logo: 'https://themewagon.github.io/jobfinderportal/assets/img/icon/job-list1.png',
        title: 'Digital Marketer',
        category: 'Creative Agency',
        location: 'Athens, Greece',
        salary: '$3500 - $4000',
        type: 'Full Time',
        posted: '7 hours ago'
    },
    {
        id: 3,
        company: 'Elisa',
        logo: 'https://themewagon.github.io/jobfinderportal/assets/img/icon/job-list1.png',
        title: 'Digital Marketer',
        category: 'Creative Agency',
        location: 'Athens, Greece',
        salary: '$3500 - $4000',
        type: 'Full Time',
        posted: '7 hours ago'
    },
    {
        id: 4,
        company: 'Elisa',
        logo: 'https://themewagon.github.io/jobfinderportal/assets/img/icon/job-list1.png',
        title: 'Digital Marketer',
        category: 'Creative Agency',
        location: 'Athens, Greece',
        salary: '$3500 - $4000',
        type: 'Full Time',
        posted: '7 hours ago'
    }
];

const JobList = () => {
    return (
        <div className="job-page-container">
            <aside className="sidebar">
                <div className="filter-group">
                    <h3>Job Category</h3>
                    <select className="filter-select">
                        <option>All Category</option>
                    </select>
                </div>

                <div className="filter-group">
                    <h3>Job Type</h3>
                    <label className="checkbox-container">
                        <input type="checkbox" /> Full Time
                    </label>
                    <label className="checkbox-container">
                        <input type="checkbox" defaultChecked /> Part Time
                    </label>
                    <label className="checkbox-container">
                        <input type="checkbox" /> Remote
                    </label>
                    <label className="checkbox-container">
                        <input type="checkbox" /> Freelance
                    </label>
                </div>

                <div className="filter-group">
                    <h3>Job Location</h3>
                    <select className="filter-select">
                        <option>Anywhere</option>
                        {/* Location Use */}
                    </select>
                </div>
            </aside>

            <main className="main-content">
                <div className="results-header">
                    <span>39,782 Jobs found</span>
                    <div className="sort-by">
                        Sort by: <select>
                            <option>None</option>
                            <option>Most Recent</option>
                            <option>Oldest</option>
                            <option>Salary (High to Low)</option>
                            <option>Salary (Low to High)</option>
                        </select>

                    </div>
                </div>

                <div className="job-list">
                    {jobs.map((job) => (
                        <div key={job.id} className="job-card">
                            <div className="job-info-left">
                                <div className="company-logo">
                                    <img src={job.logo} alt={job.company} />
                                </div>
                                <div className="job-details">
                                    <h2>{job.title}</h2>
                                    <div className="job-meta">
                                        <span>{job.category}</span>
                                        <span className="location-icon">📍 {job.location}</span>
                                        <span className="salary">{job.salary}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="job-info-right">
                                <div className="action-buttons">
                                    <button className="btn-type">{job.type}</button>
                                    <button className="btn-apply">Apply Now</button>
                                </div>
                                <span className="post-time">{job.posted}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default JobList;