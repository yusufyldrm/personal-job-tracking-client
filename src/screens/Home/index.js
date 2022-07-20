import React from 'react';
import { CreateNewJob, JobList } from './components';
import {
  Wrapper,
} from './style';

const Home = () => {
  
  return (
    <Wrapper>
      <CreateNewJob />
      <JobList />
    </Wrapper>
  )
};

export default Home;
