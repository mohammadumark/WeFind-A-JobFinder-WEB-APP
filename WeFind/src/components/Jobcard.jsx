// JobCard.js
import React from "react";
import "./JobCard.css";

const JobCard = ({ job }) => (
  <div className="job-card">
    <div className="job-title">{job.title}</div>
    <div className="company-name">{job.company}</div>
    <div className="job-description">{job.description}</div>
    <button className="apply-button">Apply</button>
  </div>
);

export default JobCard;
