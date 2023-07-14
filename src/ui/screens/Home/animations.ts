import { styled } from 'styled-components';

export const AnimationContainer = styled.div`
  .i-am-text {
    position: relative;
    overflow: hidden;
  }

  .i-am-text::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.blue['700']};
    border-left: 2px solid ${({ theme }) => theme.purple[600]};

    transition: all 0.2s;
    animation: typing 3s steps(12) infinite;
  }

  @keyframes typing {
    40%,
    60% {
      left: 100%;
    }

    100% {
      left: 0%;
    }
  }
`;
