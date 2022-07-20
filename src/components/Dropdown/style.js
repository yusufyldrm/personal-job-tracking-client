import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

export const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: row;
  background-color: #fff;
  border: 1px solid;
  border-color: ${({ $error, theme }) => $error ? theme.colors.errorText : '#60666E' };
  /* width: fit-content; */
  border-radius: 5px;
  display: flex;
  align-items: center;
  user-select: none;
  box-sizing: border-box;
  padding: ${({ size }) => (size === 'lg' ? '0.8rem' : size === 'sm' ? '0.35rem' : '0.55rem')};
  height: ${({ size }) => (size === 'lg' ? '55px' : size === 'sm' ? '35px' : '45px')};
  justify-content: space-between;
`;

export const StyledSelect = styled.select`
  height: 100%;
  /* color: red !important; */
  width: 100%;
  opacity: 0;
  position: absolute;
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  outline: none;
  &::-ms-expand {
    display: none;
  }
  appearance: none;
  background-color: transparent;
  /* color: blue; */
  border: none;
  margin: 0;
  cursor: pointer;
  /* padding: 18px 55px; */
`;

export const StyledOption = styled.option`
  /* color: ${(props) => (props.selected ? 'lightgrey' : 'black')}; */
  color: red !important;
`;

export const SelectedText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.blackText};
  white-space: nowrap;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
  font-size: ${({ size }) => (size === 'lg' ? '17px' : size === 'sm' ? '13.5px' : '15px')};
  letter-spacing: .3px;
  /* width: 100%; */
`;

export const Label = styled.label`
  color: ${({ $error }) => $error ? '#d10043' : '#000'};
  opacity: .7;
  user-select: none;
`;

export const Error = styled.p`
  color: #d10043;
  font-size: 12px;
  /* margin-bottom: 15px; */
  min-height: 12px;
`;
