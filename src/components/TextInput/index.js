import React from 'react';
import {
  TextField,
  Label,
  Error,
  Container
} from './style';

const TextInput = ({ id, label, error, mt, containerStyle, ...props }) => {
  return (
    <Container style={containerStyle}>
      {label && <Label htmlFor={id} $isError={!!error}>{label}</Label>}
      <TextField
        id={id}
        isError={error ? true : false}
        maxLength={255}
        {...props}
      />
      <Error>{error}</Error>
    </Container>
  )
};

TextInput.defaultProps = {
  ml: '0',
  mr: '0',
  mt: '5px',
  mb: '5px',
  size: 'md',
};

export default TextInput;
