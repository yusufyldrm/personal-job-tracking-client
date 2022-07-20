import { Dropdown, TextInput } from 'components';
import React from 'react'
import { Container } from './style';

const Filter = ({
  jobs,
  setJobs,
  defaultJob
}) => {
  const [title, setTitle] = React.useState('');
  const [selected, setSelected] = React.useState({ key: 'all', value: 'Priority (all)' });

  React.useEffect(() => {
    searchJob();
    // eslint-disable-next-line
  }, [defaultJob, title, selected.key]);

  const searchJob = () => {
    let result = [...defaultJob];

    if (title) {
      result = [...result.filter(job => job.name.toLowerCase().includes(title.toLowerCase()))];
    }
    if (selected.key !== 'all') {
      result = [...result.filter(job => job.priorityKey === selected.key)]
    }
    setJobs(result);
  };

  return (
    <Container>
      <TextInput
        placeholder={'Job Name'}
        containerStyle={{ width: '100%', marginRight: '20px' }}
        onChange={e => setTitle(e.target.value)}
        value={title}
        rounded
      />

      <Dropdown
        responsive={true}
        containerStyle={{ width: 'auto' }}
        options={[
          { key: 'all', value: 'Priority (all)' },
          { key: 'low', value: 'TRIVIAL' },
          { key: 'med', value: 'REGULAR' },
          { key: 'high', value: 'URGENT' },
        ]}
        selected={selected}
        change={e => setSelected(e)}
      />
    </Container>
  )
}

export default Filter
