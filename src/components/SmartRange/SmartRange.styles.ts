import styled from 'styled-components';

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 200px;
  width: auto;
  min-height: 32px;

  border-bottom: 1px solid #92abd8;

  margin: 0;
  padding: 0;

  position: relative;

  display: flex;
  align-items: center;

  transition: all 0.2s ease;

  &:after {
    content: '';

    width: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
    height: 2px;

    background: #00b1ff;

    position: absolute;
    top: 100%;
    left: 0;

    transition: all 0.2s ease;
  }

  input {
    width: 100%;

    border: none;
    /* border: 1px solid red; */
    outline: none;
    background: inherit;

    color: #92abd8;
    font-size: 0.875rem;

    padding: 6px 26px 6px 6px;

    flex: 1;

    cursor: pointer;

    &::placeholder {
      color: #92abd8;
    }
  }
`;

interface ArrowProps {
  isOpen: boolean;
}

export const Arrow = styled.div<ArrowProps>`
  width: 0;
  height: 0;

  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 8px solid ${({ isOpen }) => (isOpen ? '#00b1ff' : '#92abd8')};

  position: absolute;
  right: 8px;

  cursor: pointer;

  transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0deg')});

  transition: all 0.2s ease;
`;

// const fadeInAnimation = keyframes`
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;

// const fadeOutAnimation = keyframes`
//   from {
//     opacity: 1;
//   }
//   to {
//     opacity: 0;
//   }
// `;

// const CustomDiv = styled.div<{ isVisible: boolean }>`
//   opacity: 0;
//   animation: ${({ isVisible }) =>
//     isVisible ? fadeInAnimation : fadeOutAnimation}
//     0.3s ease forwards;
// `;
