// AppliedJobCard.js
import "./AppliedJobCard.css";

const AppliedJobCard = ({ key, job }) => (
  <div className="applied-job-card">
    <div className="job-title">{job.title}</div>
    <div className="company-name">{job.company}</div>
    <div className="job-description">{job.description}</div>
  </div>
);

export default AppliedJobCard;
