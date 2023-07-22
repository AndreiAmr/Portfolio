import { useContext } from 'react';
import Experience from '@/ui/components/Experience';
import { Flex, Text } from '@chakra-ui/react';
import { ControllerContext } from '@/infra/contexts/Controllers.context';
import { getColor } from '@/infra/helpers/colors';
import { ThemeEnum } from '@/infra/contexts/types';
import Button from '@/ui/components/Button';

const Skills = () => {
  const {
    items: { theme },
  } = useContext(ControllerContext);

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      background="blue.600"
      paddingTop="38px"
    >
      <Text
        color="purple.800"
        marginBottom="8px"
        fontSize="3.3vw"
        fontWeight="semibold"
      >
        Minhas Skills
      </Text>
      <Text
        marginBottom="48px"
        color="gray.800"
        fontWeight="bold"
        width="60vw"
        textAlign="center"
        fontSize="4vw"
      >
        TECNOLOGIAS USADAS & SUAS DESCRIÇÕES
      </Text>
      <Flex
        width="100vw"
        wrap="wrap"
        gap="20px"
        margin="0 auto"
        alignItems="center"
        justifyContent="center"
      >
        <Experience
          color={getColor('yellow', theme === ThemeEnum.dark)}
          title="React JS"
          description="There are many variations of passages of Lorem Ipsum available. many"
          percentage={95}
        />
        <Experience
          color={getColor('green', theme === ThemeEnum.dark)}
          title="React Native"
          description="There are many variations of passages of Lorem Ipsum available. many"
          percentage={89}
        />
        <Experience
          color={getColor('purple', theme === ThemeEnum.dark)}
          title="Node JS"
          description="There are many variations of passages of Lorem Ipsum available. many"
          percentage={80}
        />
        <Experience
          color={getColor('blue', theme === ThemeEnum.dark)}
          title="SQL"
          description="There are many variations of passages of Lorem Ipsum available. many"
          percentage={85}
        />
      </Flex>
      <Flex width="90vw" flexDirection="row-reverse" my="12px">
        <Button
          bgColor="yellow.800"
          label="Ver mais"
          labelColor="white"
          onClick={() => {
            console.log('test');
          }}
        />
      </Flex>
    </Flex>
  );
};

export default Skills;
