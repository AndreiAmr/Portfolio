import { useContext, useEffect } from 'react';
import Experience from '@/ui/components/Experience';
import { Flex, Text } from '@chakra-ui/react';
import { ControllerContext } from '@/infra/contexts/Controllers.context';
import { getColor } from '@/infra/helpers/colors';
import { ThemeEnum } from '@/infra/contexts/types';
import { Bounce, Fade, Zoom } from 'react-awesome-reveal';
import Button from '@/ui/components/Button';

const Skills = () => {
  const {
    items: { theme },
  } = useContext(ControllerContext);

  useEffect(() => {
    const element = document.getElementById('skills-container');
    console.log(element?.offsetTop);
  }, []);

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      background="blue.600"
      paddingTop={['3vh', '3vh', '3vh', '5vh']}
      padding="24px 0"
      id="skills-container"
      position="relative"
    >
      <Fade duration={500} cascade>
        <Text
          color="purple.800"
          marginBottom="8px"
          fontSize={['3.3vw', '3.3vw', '3.3vw', '26px']}
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
          fontSize={['4vw', '4vw', '4vw', '36px']}
        >
          TECNOLOGIAS USADAS & SUAS DESCRIÇÕES
        </Text>
      </Fade>
      <Flex
        width="100vw"
        maxW="1400px"
        wrap="wrap"
        gap="20px"
        margin={['0', '0', '0', '0 auto']}
        alignItems="center"
        justifyContent="center"
      >
        <Zoom cascade duration={500}>
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
        </Zoom>
      </Flex>

      <Flex width="90vw" flexDirection="row-reverse" my="3vh" maxW="1320px">
        <Bounce delay={1000}>
          <Button
            bgColor="yellow.800"
            label="Ver mais skills"
            labelColor="white"
            onClick={() => {
              console.log('test');
            }}
          />
        </Bounce>
      </Flex>
    </Flex>
  );
};

export default Skills;
