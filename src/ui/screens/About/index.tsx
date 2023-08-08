import { useContext } from 'react';
import Service from '@/ui/components/Service';
import { Flex, Text } from '@chakra-ui/react';
import DevelopmentIcon from '@assets/images/development.png';
import AppDev from '@assets/images/app-development.png';
import UiUx from '@assets/images/ui-ux.png';
import WebDesign from '@assets/images/web-design.png';
import Button from '@/ui/components/Button';
import { Fade, Zoom, Bounce } from 'react-awesome-reveal';
import * as S from './animations';
import { ControllerContext } from '@/infra/contexts/Controllers.context';
import Curriculum from '@assets/curriculum.pdf';

const About = () => {
  const {
    items: {
      isAnimating,
      currentLanguage: { about },
    },
  } = useContext(ControllerContext);

  const handleDownloadCurriculum = () => {
    const link = document.createElement('a');
    link.href = Curriculum;
    link.download = 'Andrei-Amaral-Curriculo';
    link.dispatchEvent(new MouseEvent('click'));
  };

  return (
    <S.Container id="about-screen">
      <Flex
        flexDirection="column"
        alignItems="center"
        background="background"
        paddingTop={['3vh', '3vh', '3vh', '5vh']}
        padding="24px"
        overflow="hidden"
      >
        <Fade duration={500} cascade>
          <Text
            color="purple.800"
            fontSize={['3.3vw', '3.3vw', '3.3vw', '26px']}
            fontWeight="semibold"
            className={`${isAnimating && 'change-animate'}`}
          >
            {about.title}
          </Text>
          <Text
            maxW="675px"
            textAlign="center"
            fontWeight="semibold"
            mt="12px"
            fontSize={['4vw', '4vw', '4vw', '36px']}
            marginBottom="30px"
            className={`${isAnimating && 'change-animate'}`}
          >
            {about.subtitle}
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
              title={about.cards.web}
              description={about.cards.webDescription}
            />
            <Service
              icon={AppDev}
              title={about.cards.app}
              description={about.cards.appDescription}
            />
            <Service
              icon={UiUx}
              title={about.cards.ui}
              description={about.cards.uiDescription}
            />
            <Service
              icon={WebDesign}
              title={about.cards.webDesign}
              description={about.cards.webDesignDescription}
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
              label={about.downloadCurriculum}
              labelColor="white"
              onClick={handleDownloadCurriculum}
            />
          </Bounce>
        </Flex>
      </Flex>
    </S.Container>
  );
};

export default About;
