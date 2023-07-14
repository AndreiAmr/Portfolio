import { Box, Flex, Text } from '@chakra-ui/react';

const About = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      flex={1}
      height={'100vh'}
      background="background"
    >
      <Text color="purple.800" fontSize="16px" fontWeight="semibold">
        Minha especialidade
      </Text>
      <Text
        maxW="300px"
        textAlign="center"
        fontWeight="semibold"
        mt="12px"
        fontSize="16px"
      >
        COM AMPLA EXPERIENCIA EM SERVIÇOS DIGITAIS
      </Text>
    </Flex>
  );
};

export default About;
