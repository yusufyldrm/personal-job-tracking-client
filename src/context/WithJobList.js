import React, { useState, createContext } from 'react';
// import DATA from '__mock__/data.json';

const PRIORITY = {
  low: 'TRIVIAL',
  med: 'REGULAR',
  high: 'URGENT'
};

export const JobListContext = createContext();

export const WithJobList = ({ children }) => {
  const [jobList, setJobList] = useState([]);

  React.useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('jobList') || '[]');
    setJobList(data);
  }, []);

  const addJobValidation = (job) => {
    const { name, priority } = job;
    if (!name || !PRIORITY[priority]) {
      return false;
    }
    return true;
  };

  const addJobToList = ({ name, priority }) => {
    if (addJobValidation({ name, priority })) {
      const newJobs = [...jobList, {
        name,
        priority: PRIORITY[priority],
        priorityKey: priority,
        id: jobList.length + 1
      }]
      setJobList(newJobs);
      window.localStorage.setItem('jobList', JSON.stringify(newJobs));
      console.log('jobList', jobList);
      console.log('add job to list');
    } else {
      console.log('invalid job');
    }
  };

  const editSingleJob = ({ idx, job }) => {
    const jobs = [...jobList];
    const edittedJob = jobList.find(job => job.id === idx);
    edittedJob.name = job.name;
    edittedJob.priorityKey = job.priority;
    edittedJob.priority = PRIORITY[job.priority];
    setJobList(jobs);
    window.localStorage.setItem('jobList', JSON.stringify(jobs));
  };

  const removeJobFromList = ({ id }) => {
    const newJobs = jobList.filter(job => job.id !== id);
    setJobList(newJobs);
    window.localStorage.setItem('jobList', JSON.stringify(newJobs));
  };

  return <JobListContext.Provider value={{ jobList, addJobToList, editSingleJob, removeJobFromList }}>
    {children}
  </JobListContext.Provider>;
};
