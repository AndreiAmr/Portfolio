import { styled } from 'styled-components';

export const AnimationBar = styled.div<{ deg: number; color: string }>`
  position: relative;

  height: 12vh;
  width: 12vh;
  border-radius: 50%;

  background: ${({ theme, deg, color }) =>
    `conic-gradient(${color} ${deg}deg, ${theme.gray[600]}50 0deg)`};
  color: ${({ color }) => color};

  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    height: calc(12vh - 6px);
    width: calc(12vh - 6px);
    background-image: ${({ theme }) =>
      `linear-gradient(145deg, ${theme.blue[400]}, ${theme.white})`};
    border-radius: 50%;
  }
`;

export const Progress = styled.p`
  position: relative;
  font-size: 3.4vh;
`;
