import React from 'react';
import {
  DropdownWrapper,
  StyledSelect,
  StyledOption,
  SelectedText,
  Label,
  Wrapper,
  Error
} from './style.js';
import { BsChevronDown as DownIcon } from 'react-icons/bs';

const selectRef = React.createRef();

const Dropdown = ({ change, options, selected, defaultValue, label, error, containerStyle, ...props }) => {

  const handleChange = (e) => {
    const selectedOption = e.target.selectedOptions[0];
    change({ key: selectedOption.value, value: selectedOption.text });
  };

  return (
    <Wrapper style={containerStyle || {}}>
      {label && <Label $error={!!error}>{label}</Label>}
      <DropdownWrapper
        $error={!!error}
      >
        <StyledSelect
          ref={selectRef}
          value={selected.key || defaultValue}
          onChange={handleChange}
        >
          {defaultValue &&
            <StyledOption
              key={'default'}
              value={defaultValue}
              disabled
            >
              {defaultValue}
            </StyledOption>
          }

          {options.map((option) => (
            <StyledOption
              key={option.key}
              value={option.key}
            >
              {option.value}
            </StyledOption>
          ))}
        </StyledSelect>

        <SelectedText>{selected?.value ? selected?.value : defaultValue}</SelectedText>
        <DownIcon color='#000' size={'16px'} style={{ marginLeft: '15px' }} />
      </DropdownWrapper>
      <Error>{error}</Error>
    </Wrapper>
  );
};

export default Dropdown;