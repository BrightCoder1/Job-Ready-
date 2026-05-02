// ApplyProcess.jsx

import React from "react";
import "./css/ApplyProcess.css";
import { FaSearch, FaUserCheck, FaBriefcase } from "react-icons/fa";

const processData = [
  {
    id: 1,
    icon: <FaSearch />,
    title: "1. Search a job",
    description:
      "Sorem spsum dolor sit amsectetur adipiscing elit, seddo eiusmod tempor incididunt ut laborea.",
  },
  {
    id: 2,
    icon: <FaUserCheck />,
    title: "2. Apply for job",
    description:
      "Sorem spsum dolor sit amsectetur adipiscing elit, seddo eiusmod tempor incididunt ut laborea.",
  },
  {
    id: 3,
    icon: <FaBriefcase />,
    title: "3. Get your job",
    description:
      "Sorem spsum dolor sit amsectetur adipiscing elit, seddo eiusmod tempor incididunt ut laborea.",
  },
];

const ApplyProcess = () => {
  return (
    <section className="apply-process">
      <div className="overlay">
        <p className="sub-heading">APPLY PROCESS</p>
        <h1 className="main-heading">How it works</h1>

        <div className="process-container">
          {processData.map((item) => (
            <div className="process-card" key={item.id}>
              <div className="icon">{item.icon}</div>

              <h2>{item.title}</h2>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplyProcess;