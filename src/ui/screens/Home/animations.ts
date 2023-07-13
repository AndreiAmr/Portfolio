import { styled } from "styled-components";

export const AnimationContainer = styled.div`
  .i-am-text {
    position: relative;
  }

  .i-am-text::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.blue["700"]};
    border-left: 2px solid ${({ theme }) => theme.purple[600]};
    animation: typing 3s steps(14) infinite;
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
