import React from 'react';
import { JobListContext } from 'context/WithJobList';
import {
  Content,
  Title,
  ButtonContainer
} from './style';
import { Button, Dropdown, TextInput } from 'components';

const EditJob = ({
  job,
  onClose
}) => {
  const { editSingleJob } = React.useContext(JobListContext);
  const [title, setTitle] = React.useState({ value: '', error: '' });
  const [selected, setSelected] = React.useState({ key: '', value: '' });

  React.useEffect(() => {
    setTitle({ value: job.name, error: '' });
    setSelected({ key: job.priorityKey, value: job.priority });
  }, [job]);

  const editJob = () => {
    if (!title.value) {
      setTitle({ ...title, error: '*Job Title is required' });
      return;
    }
    editSingleJob({ idx: job.id, job: { name: title.value, priority: selected.key } });
    onClose?.();
  };

  return (
    <Content>
      <Title>Job Edit</Title>
      <TextInput
        id={'job-title'}
        label={'Job Title'}
        placeholder={'Job Title'}
        rounded
        onChange={(e) => setTitle({ value: e.target.value, error: '' })}
        value={title.value}
        error={title.error}
      />
      <Dropdown
        defaultValue={'Choose'}
        options={[
          { key: 'low', value: 'TRIVIAL' },
          { key: 'med', value: 'REGULAR' },
          { key: 'high', value: 'URGENT' },
        ]}
        selected={selected}
        error={selected.error}
        label={'Job Priority'}
        change={(e) => setSelected(e)}
      />
      <ButtonContainer>
        <Button
          title={'Cancel'}
          onClick={() => onClose?.()}
          style={{ width: '30%' }}
          bg={'#ccc'}
          textColor={'#00000088'}
        />

        <Button
          title={'Save'}
          onClick={editJob}
          style={{ width: '30%' }}
          bg={'#f44336'}
        />
      </ButtonContainer>
    </Content>
  )
};

export default EditJob;
