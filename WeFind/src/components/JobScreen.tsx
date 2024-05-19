import React, { useState, useEffect, useRef } from 'react';
import JobCard from './JobCard';
import './JobsScreen.css';
import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from './Breadcrumbs/Breadcrumb';

const JobsScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [jobs, setJobs] = useState([]);
  const innerContainerRef = useRef(null);
  const initialJobCount = 8;
  const jobsIncrement = 8;

  useEffect(() => {
    // Initial load with 8 jobs
    const initialJobs = Array.from({ length: initialJobCount }, (_, index) => ({
      title: `Job Title ${index + 1}`,
      company: `Company ${index + 1}`,
      description: 'This is a description of the job.',
    }));
    setJobs(initialJobs);
  }, []);

  const handleOptionClick = (option: React.SetStateAction<null>) => {
    setSelectedOption(option);
  };

  const loadMoreJobs = () => {
    const newJobs = Array.from({ length: jobsIncrement }, (_, index) => ({
      title: `Job Title ${jobs.length + index + 1}`,
      company: `Company ${jobs.length + index + 1}`,
      description: 'This is a description of the job.',
    }));
    setJobs((prevJobs) => [...prevJobs, ...newJobs]);
  };

  const handleScroll = () => {
    if (innerContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        innerContainerRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        // Load more jobs if the user scrolls to the bottom
        loadMoreJobs();
      }
    }
  };

  return (
    <DefaultLayout>
      <div className="container">
        <div
          className="inner-container"
          ref={innerContainerRef}
          onScroll={handleScroll}
        >
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default JobsScreen;
