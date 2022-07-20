import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  color: ${({ textColor }) => textColor};
  border: none;
  border-radius: ${({ radius }) => `${radius}px`};
  background-color: ${({ bg }) => bg};

  font-size: ${({ size }) => (size === 'lg' ? '22px' : size === 'sm' ? '13.5px' : '15px')};

  padding: ${({ pd }) => pd};
  height: auto;
  transition: all 0.2s ease, color 0.2s ease;
  user-select: none;
  display: flex; 
  justify-content: center;
  align-items: center;
  flex-direction: ${({ $isReverse }) => $isReverse ? 'row-reverse' : 'row'};
  
  :active {
    transform: ${({ disabled }) => disabled ? 'none' : 'scale(.994)'};
  }

  :disabled {
    cursor: default;
    opacity: .5;
  }

  ${({ responsive, theme }) =>
    responsive &&
    css`
      @media (max-width: ${theme.breakpoints.tablet}) {
        padding: 0.35rem;
        font-size: 13.5px;
      }
      @media (max-width: ${theme.breakpoints.mobile}) {
        padding: 0.26rem;
        font-size: 12.2px;
      }
    `}
`;