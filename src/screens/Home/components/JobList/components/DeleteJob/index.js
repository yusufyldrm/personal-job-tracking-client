import React from 'react';
import { Button } from 'components';
import { JobListContext } from 'context/WithJobList';
import { CgDanger } from 'react-icons/cg';
import {
  Container,
  ButtonContainer,
  Context
} from './style';

const DeleteJob = ({
  job,
  onClose
}) => {
  const { removeJobFromList } = React.useContext(JobListContext);
  const deleteJob = () => {
    removeJobFromList({ id: job });
    onClose?.();
  };

  return (
    <Container>
      <CgDanger size={50} color={'red'} style={{ margin: '0 auto' }} />
      <Context>Are you sure you want to delete it?</Context>
      <ButtonContainer>
        <Button
          title={'Cancel'}
          onClick={() => onClose?.()}
          style={{ width: '40%' }}
          bg={'#ccc'}
          textColor={'#00000088'}
        />

        <Button
          title={'Approve'}
          onClick={deleteJob}
          style={{ width: '40%' }}
          bg={'#f44336'}
        />
      </ButtonContainer>
    </Container>
  )
};

export default DeleteJob;
