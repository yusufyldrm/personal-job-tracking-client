import styled from 'styled-components';

export const TextField = styled.input`
  border-radius: ${({ rounded }) => (rounded ? '5px' : '0')};
  color: ${({ theme }) => theme.colors.blackText};
  border: 1px solid ${({ isError, theme }) => isError ? theme.colors.errorText : '#8692A6'};
  box-sizing: border-box;
  font-size: ${({ size }) => (size === 'lg' ? '17px' : size === 'sm' ? '13.5px' : '15px')};
  padding: ${({ size }) => (size === 'lg' ? '0.8rem' : size === 'sm' ? '0.35rem' : '0.55rem')};
  margin: ${({ ml, mr, mt, mb, isError }) => `${mt} ${mr} ${isError ? '3px' : mb} ${ml}`};
  transition: all 0.2s ease, color 0.2s ease;
  height: ${({ size }) => (size === 'lg' ? '55px' : size === 'sm' ? '35px' : '45px')};
  width: 100%;
  letter-spacing: .3px;

  :focus {
    -webkit-box-shadow: ${({ shadow, isError }) => (shadow ? `0px 0px 5px 1px ${isError ? '#d10043' : 'rgba(19, 124, 189, 0.82)'}` : '')};
    box-shadow: ${({ shadow, isError }) => (shadow ? `0px 0px 5px 1px ${isError ? '#d10043' : 'rgba(19, 124, 189, 0.82)'}` : '')};
  }

  :active {
    border-color: #393d7277;
  }

  :disabled {
    opacity: .8;
  }

  &::placeholder {
    color: ${({ isError }) => isError ? '#d10043' : '#21252966'};
    letter-spacing: normal;
    user-select: none;
  }
`;

export const Label = styled.label`
  color: ${({ $isError }) => $isError ? '#d10043' : '#000'};
  opacity: .7;
  user-select: none;
`;

export const Error = styled.p`
  color: #d10043;
  font-size: 12px;
  min-height: 12px;
`;

export const Container = styled.div`
  margin-bottom: 10px;
`;
