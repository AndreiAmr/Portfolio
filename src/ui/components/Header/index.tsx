import { Box, Flex, Text } from '@chakra-ui/react';
import Name from './components/Name';
import Menu from './components/Menu';

const Header = () => {
  return (
    <Flex
      h="64px"
      w="100vw"
      bg="blue.700"
      alignItems="center"
      paddingX="14px"
      justifyContent="space-between"
    >
      <Name />

      <Menu />
    </Flex>
  );
};

export default Header;
