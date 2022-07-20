import styled from 'styled-components';

export const HomeWrapper = styled.main`

`;

export const HomeSection = styled.section`
  padding-top: ${({ $headerHeight }) => $headerHeight}px;
  min-height: calc(100vh - ${({ $headerHeight }) => $headerHeight}px - 60px);
  transition: none;
`;
