import styled from 'styled-components';

export const Container = styled.div`

`;

export const Title = styled.h3`
  font-size: 18px;
  margin: 20px 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
