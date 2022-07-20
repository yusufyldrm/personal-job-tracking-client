import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
`;

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  @media (max-width: ${({ theme }) => theme.breakpoints.desktopLarge}){
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}){
    font-size: 15px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}){
    font-size: 12px;
  }
  tr {
    /* border-bottom: 1px solid #ccc; */
  }
  th {
    border-top: none;
    border-bottom: 1px solid #ccc;
    padding: 10px;
    font-weight: bold;
    text-align: left;
    background-color: #007cff30;
  }
  td {
    padding: 10px;
  }
  tr:nth-child(even) {
    background-color: #f5f5f5;
  }
  tr:nth-child(odd) {
    background-color: #fff;
  }
`;

export const JobTitle = styled.td`
  width: fit-content;
  max-width: 10vw;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Priority = styled.div`
  transition: background-color 0s;
  background-color: ${({ $color }) => $color};
  border-radius: 5px;
  width: fit-content;
  color: #fff;
  padding: 5px 10px;
`;

export const Actions = styled.td`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  button {
    &:not(:first-child) {
      margin-left: 10px;
    }
  }

  @media (max-width: 415px){
    flex-direction: column;
    button {
      margin-left: 0 !important;
      &:not(:first-child) {
      margin-top: 10px;
    }
    }
  }
`;

export const FilterContainer = styled.div`

`;
