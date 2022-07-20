import React from 'react';
import { JobListContext } from 'context/WithJobList';
import {
  Container,
  Title,
  Table,
  JobTitle,
  Priority,
  Actions
} from './style';
import EditJob from './components/EditJob';
import { Button, Modal } from 'components';
import { BsPencil } from 'react-icons/bs';
import { IoTrashBinOutline } from 'react-icons/io5';
import DeleteJob from './components/DeleteJob';
import Filter from './components/Filter';

const JobList = () => {
  const { jobList } = React.useContext(JobListContext);
  const [modal, setModal] = React.useState({ visible: false, type: '' });
  const [selectedJob, setSelectedJob] = React.useState(null);
  const [jobs, setJobs] = React.useState([]);

  const priorityColor = (priority) => {
    switch (priority) {
      case 'low':
        return '#007CFF';
      case 'med':
        return '#ff9800';
      case 'high':
        return '#f44336';
      default:
        return '#000';
    };
  };

  const handleEdit = (job) => {
    setSelectedJob(job);
    setModal({ visible: true, type: EditJob });
  };

  const handleRemove = (job) => {
    setSelectedJob(job);
    setModal({ visible: true, type: DeleteJob });
  };

  const closeModal = () => {
    setModal({ visible: false, type: '' });
    setSelectedJob(null);
  };

  return (
    <Container>
      <Title>Job List</Title>
      <Filter
        jobs={jobs}
        setJobs={e => setJobs(e)}
        defaultJob={jobList}
      />
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Priority</th>
            <th style={{ textAlign: 'right' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index}>
              <JobTitle>{job.name}</JobTitle>
              <td>
                <Priority $color={priorityColor(job.priorityKey)}>
                  {job.priority}
                </Priority>
              </td>
              <Actions>
                <Button
                  icon={BsPencil}
                  onClick={() => handleEdit(job)}
                />
                <Button
                  icon={IoTrashBinOutline}
                  onClick={() => handleRemove(job.id)}
                />
              </Actions>
            </tr>
          ))}
        </tbody>
      </Table>
      {jobs.length <= 0 && <p style={{ textAlign: 'center', margin: '20px 0' }}>No Jobs</p>}
      <Modal
        isVisible={modal.visible}
        close={closeModal}
      >
        <modal.type job={selectedJob} onClose={closeModal} />
      </Modal>
    </Container>
  )
};

export default JobList;
