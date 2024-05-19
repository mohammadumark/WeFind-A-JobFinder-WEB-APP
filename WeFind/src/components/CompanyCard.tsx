// AppliedJobCard.js
import React from 'react';
import "./AppliedJobCard.css";

const CompanyCard = ({ job }) => (
  <div className="applied-job-card">
    <div className="company-details">
      <div className="company-name">{job.company.name}</div>
      <div className="company-vision">{job.company.vision}</div>
      <div className="company-location">{job.company.location}</div>
    </div>
  </div>
);

export default CompanyCard;
