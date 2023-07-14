import { useState, useEffect, useRef } from 'react';
import { IconButton, Image } from '@chakra-ui/react';
import UpIcon from '@assets/icons/up.svg';
import * as S from './animations';

const BackToTop = () => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  return (
    <S.AnimationContainer show={show}>
      <IconButton
        width="6vh"
        height="6vh"
        borderRadius="50%"
        background="yellow.800"
        aria-label="back-top-icon"
        id="back-to-top"
        icon={<Image w="20px" src={UpIcon} />}
        zIndex={99}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
      />
    </S.AnimationContainer>
  );
};

export default BackToTop;
