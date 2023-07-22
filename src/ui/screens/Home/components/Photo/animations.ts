import { styled } from 'styled-components';

export const AnimationContainer = styled.div`
  position: relative;

  height: 27vh;
  width: 27vh;
  display: flex;
  align-items: center;

  justify-content: center;
  margin-top: 10px;

  .perfil-animation-1::before {
    content: '';
    position: absolute;

    border-radius: 50%;

    background-color: #c6b2f3;
    z-index: 1;

    animation: profile-animation 3s infinite;
  }

  .perfil-animation-1::after {
    content: '';
    position: absolute;

    border-radius: 50%;

    background-color: #c6b2f350;
    z-index: 1;

    animation: profile-animation-after 3s infinite;
    animation-delay: 0.2s;
    opacity: 0;
  }

  @keyframes profile-animation {
    0% {
      width: 20vh;
      height: 20vh;
    }

    50% {
      width: 25vh;
      height: 25vh;
    }

    100% {
      width: 20vh;
      height: 20vh;
    }
  }

  @keyframes profile-animation-after {
    0% {
      width: 0vh;
      height: 0vh;
      opacity: 1;
    }

    50% {
      width: 27vh;
      height: 27vh;
      opacity: 1;
    }

    100% {
      width: 0vh;
      height: 0vh;
      opacity: 1;
    }
  }
`;
