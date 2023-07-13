import { styled } from 'styled-components';

export const AnimationContainer = styled.div`
  position: relative;

  .perfil-animation-1::before {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;

    background-color: #c6b2f3;
    z-index: 1;

    animation: profile-animation 2s infinite;
  }

  .perfil-animation-1::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;

    background-color: #c6b2f350;
    z-index: 1;

    animation: profile-animation-after 2s infinite;
    animation-delay: 0.2s;
    opacity: 0;
  }

  @keyframes profile-animation {
    0% {
      width: 245px;
      height: 245px;
    }

    50% {
      width: 213px;
      height: 213px;
    }

    100% {
      width: 245px;
      height: 245px;
    }
  }

  @keyframes profile-animation-after {
    0% {
      width: 265px;
      height: 265px;
      opacity: 1;
    }

    50% {
      width: 213px;
      height: 213px;
      opacity: 1;
    }

    100% {
      width: 265px;
      height: 265px;
      opacity: 1;
    }
  }
`;
