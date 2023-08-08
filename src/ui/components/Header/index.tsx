import { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import Name from './components/Name';
import Menu from './components/Menu';

const Header = () => {
  const [fixed, setFixed] = useState<boolean>(false);

  useEffect(() => {
    const aboutScreen = document.getElementById('about-screen');

    window.addEventListener('scroll', () => {
      if (window.scrollY >= aboutScreen!.getBoundingClientRect().top) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    });
  }, []);

  return (
    <Flex
      top={0}
      left={0}
      right={0}
      paddingX="14px"
      position={fixed ? 'fixed' : 'relative'}
      zIndex={999}
      transition="all .5s"
      justifyContent="center"
      pointerEvents="none"
      bg={'blue.600'}
    >
      <Flex
        width="100%"
        height="64px"
        alignItems="center"
        justifyContent="space-between"
        maxW="1500px"
        pointerEvents="initial"
      >
        <Name />

        <Menu />
      </Flex>
    </Flex>
  );
};

export default Header;
