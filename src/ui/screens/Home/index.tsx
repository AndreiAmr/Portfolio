import { useContext, useEffect } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import Button from '@/ui/components/Button';
import Typed from 'typed.js';
import PurpleBG from '@assets/images/purple-bg.svg';
import { Fade, Zoom, Bounce } from 'react-awesome-reveal';

import Photo from './components/Photo';
import * as S from './animations';
import { ControllerContext } from '@/infra/contexts/Controllers.context';

const Home = () => {
  const {
    items: {
      isAnimating,
      currentLanguage: { home },
    },
  } = useContext(ControllerContext);

  const handleGoToJobs = () => {
    const jobsElement = document.getElementById('jobs-container');
    const jobsContainerTop = jobsElement?.getBoundingClientRect().top;

    if (jobsContainerTop) {
      window.scrollTo({
        top: jobsContainerTop - 100,
        behavior: 'smooth',
      });
    }
  };

  const handleGoToContact = () => {
    const contactElement = document.getElementById('contact-container');
    const contactContainerTop = contactElement?.getBoundingClientRect().top;

    if (contactContainerTop) {
      window.scrollTo({
        top: contactContainerTop - 100,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    new Typed('#i-am-text', {
      strings: home.nameAndFunction,
      typeSpeed: 70,
      backSpeed: 70,
    });
  }, []);

  return (
    <S.AnimationContainer id="home-screen">
      <Flex
        bgGradient="linear(to-r, blue.500, blue.600)"
        // height="55vh"
        // background="blue.600"
        // padding="2vh"
        width="100%"
        paddingTop="25px"
        position="relative"
        transition="all 0.2s"
        height={['initial', 'initial', 'initial', '50vh']}
      >
        <Flex
          backgroundImage={['none', 'none', 'none', 'none', 'none', PurpleBG]}
          height="100%"
          width={'100%'}
          flexDirection={['column', 'column', 'row']}
          alignItems={'center'}
          justifyContent="center"
          backgroundPosition="-20vh 15vh"
          backgroundRepeat="no-repeat"
          backgroundSize="50vh"
        >
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            mr={['0', '0', '30px']}
          >
            <Fade cascade big>
              <Text
                fontSize={['4vw', '4vw', '2.5vw', '30px']}
                className={`${isAnimating && 'change-animate'}`}
              >
                {home.grettings}
              </Text>

              <Text
                fontSize={['8vw', '8vw', '6vw', '70px']}
                color="purple.800"
                // className="i-am-text"
                textAlign={'left'}
                id="i-am-text"
                height={['5vh', '5vh', '5vh', '5vh', '8vh']}
                fontWeight="bold"
                className={`${isAnimating && 'change-animate'}`}
              ></Text>
              <Text
                fontSize={['3vw', '3vw', '2vw', '30px']}
                color="gray.600"
                maxW="75vw"
                textAlign="center"
                id="small-text"
                margin={['0', '2vh 0 0', '5% 0 0']}
                maxWidth="800px"
                className={`${isAnimating && 'change-animate'}`}
              >
                {home.myJobDescription}
              </Text>
            </Fade>

            <Flex marginTop="33px" gap="30px" mb="30px">
              <Bounce delay={1000} duration={500}>
                <Button
                  bgColor="yellow.800"
                  label={home.contactMe}
                  onClick={handleGoToContact}
                  labelColor="white"
                />
              </Bounce>
              <Bounce delay={1250} duration={500}>
                <Button
                  bgColor="transparent"
                  label={home.myJobs}
                  onClick={handleGoToJobs}
                  labelColor="purple.700"
                />
              </Bounce>
            </Flex>
          </Flex>
          <Zoom delay={500}>
            <Photo />
          </Zoom>
        </Flex>
      </Flex>
    </S.AnimationContainer>
  );
};

export default Home;
