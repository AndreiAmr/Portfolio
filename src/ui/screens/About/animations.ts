import { styled } from 'styled-components';

export const Container = styled.div`
  position: relative;

  &::before {
    content: '';
    position: 'absolute';
    right: '-15vh';
    height: '25vh';
    background: '#764FD0';
    width: '25vh';
    top: 'calc(50% - 12.5vh)';
    borderradius: '50%';
  }
`;
