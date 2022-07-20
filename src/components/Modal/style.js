import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  overflow: auto;
`;

export const Content = styled.div`
  position: relative;
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 5px;
  /* min-height: 50vh; */
  min-width: 50vw;
  max-height: 80vh;
  max-width: 80vw;
  z-index: 10;
/* 
  width: 30%;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  max-height: 80%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  padding: 2rem 0 0 0;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-between; */
`;
