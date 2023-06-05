import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`
  0% {
    height: 0px;
    transform: scale(0);
  }
  100% {
    height: fit-content;
    transform: scale(1);
  }
`;

export const Container = styled.div`
  box-sizing: border-box;

  opacity: 0;
  animation-name: ${fadeInAnimation};
  animation-duration: 0.2s;
  animation-timing-function: ease;
`;
