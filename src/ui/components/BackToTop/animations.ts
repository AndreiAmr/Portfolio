import { css, styled } from 'styled-components';

export const AnimationContainer = styled.div<{ show: boolean }>`
  position: fixed;
  right: 20px;
  width: 10vh;
  height: 10vh;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ show }) =>
    show
      ? css`
          bottom: 20px;
          opacity: 1;
        `
      : css`
          bottom: -70px;
          opacity: 0;
        `}

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.yellow[600] + '50'};
    opacity: 0;
    border-radius: 50%;
    animation: animate 2s infinite;
    animation-delay: 0.5s;
  }

  &::after {
    content: '';
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.yellow[600] + '90'};
    border-radius: 50%;

    animation: animate 2s infinite;
  }

  @keyframes animate {
    0% {
      width: 60%;
      height: 60%;
      opacity: 1;
    }

    50% {
      width: 80%;
      height: 80%;
      opacity: 1;
    }

    100% {
      width: 60%;
      height: 60%;
      opacity: 1;
    }
  }
`;
