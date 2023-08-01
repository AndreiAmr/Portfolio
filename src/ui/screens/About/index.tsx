import Service from '@/ui/components/Service';
import { Flex, Text } from '@chakra-ui/react';
import DevelopmentIcon from '@assets/images/development.png';
import AppDev from '@assets/images/app-development.png';
import UiUx from '@assets/images/ui-ux.png';
import WebDesign from '@assets/images/web-design.png';
import Button from '@/ui/components/Button';
import { Fade, Zoom, Bounce } from 'react-awesome-reveal';
import * as S from './animations';

const About = () => {
  return (
    <S.Container id="about-screen">
      <Flex
        flexDirection="column"
        alignItems="center"
        flex={1}
        background="background"
        paddingTop={['3vh', '3vh', '3vh', '5vh']}
        padding="24px"
        overflow="hidden"
        position="relative"
      >
        <Fade duration={500} cascade>
          <Text
            color="purple.800"
            fontSize={['3.3vw', '3.3vw', '3.3vw', '26px']}
            fontWeight="semibold"
          >
            Minha especialidade
          </Text>
          <Text
            maxW="675px"
            textAlign="center"
            fontWeight="semibold"
            mt="12px"
            fontSize={['4vw', '4vw', '4vw', '36px']}
            marginBottom="30px"
          >
            COM AMPLA EXPERIENCIA EM SERVIÇOS DIGITAIS
          </Text>
        </Fade>

        <Flex
          flexDirection="row"
          gridGap="20px"
          wrap="wrap"
          justifyContent="center"
          width="100vw"
          maxWidth="1500px"
          my={['0', '0', '0', '4vh']}
        >
          <Zoom delay={500} duration={500} cascade>
            <Service
              icon={DevelopmentIcon}
              title="Web Development"
              description="There are many variations of passages of Lorem Ipsum available.  many variations of passages of Lorem Ipsum available."
            />
            <Service
              icon={AppDev}
              title="App Development"
              description="There are many variations of passages of Lorem Ipsum available.  many variations of passages of Lorem Ipsum available."
            />
            <Service
              icon={UiUx}
              title="Ui/Ux Desing"
              description="There are many variations of passages of Lorem Ipsum available.  many variations of passages of Lorem Ipsum available."
            />
            <Service
              icon={WebDesign}
              title="Web Design"
              description="There are many variations of passages of Lorem Ipsum available.  many variations of passages of Lorem Ipsum available."
            />
          </Zoom>
        </Flex>

        <Flex
          flexDirection="row-reverse"
          flex={1}
          width="100%"
          marginY="4vh"
          marginBottom="4vh"
          maxW="1320px"
        >
          <Bounce delay={1000}>
            <Button
              bgColor="yellow.800"
              label="Baixar curriculo"
              labelColor="white"
              onClick={() => {
                console.log('BAIXAR');
              }}
            />
          </Bounce>
        </Flex>
      </Flex>
    </S.Container>
  );
};

export default About;
