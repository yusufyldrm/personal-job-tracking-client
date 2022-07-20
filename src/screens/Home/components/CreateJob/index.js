import React from 'react';
import { JobListContext } from 'context/WithJobList';
import { HiPlus } from 'react-icons/hi';
import { Button, Dropdown, TextInput } from 'components';
import {
  Container,
  Title,
  Content
} from './style';

const CreateJob = () => {
  const { addJobToList } = React.useContext(JobListContext);
  const [title, setTitle] = React.useState({ value: '', error: '' });
  const [selected, setSelected] = React.useState({ key: '', value: '' });

  const addJob = () => {
    const titleError = title.value.length > 0 ? '' : '*Job Title is required';
    const priorityError = !selected.key ? '*Select Job Priority' : '';
    if (titleError || priorityError) {
      setTitle({ ...title, error: titleError });
      setSelected({ ...selected, error: priorityError });
      return;
    }
    addJobToList({ name: title.value, priority: selected.key });
    setTitle({ ...title, value: '' });
    setSelected({ key: '', value: '' });
  };

  return (
    <Container>
      <Title>Create New Job</Title>
      <Content>
        <TextInput
          id={'job-title'}
          label={'Job Title'}
          placeholder={'Job Title'}
          containerStyle={{ width: '100%', marginRight: '20px' }}
          onChange={(e) => setTitle({ value: e.target.value, error: '' })}
          rounded
          value={title.value}
          error={title.error}
        />
        <Dropdown
          defaultValue={'Choose'}
          responsive={true}
          containerStyle={{ marginRight: '20px' }}
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
        <Button
          title={'Create'}
          icon={HiPlus}
          onClick={addJob}
          pd={'12px'}
          iconProps={{ size: '18px' }}
          bg={'#348ff0'}
          isReverse
        />

      </Content>
    </Container>
  )
};

export default CreateJob;
