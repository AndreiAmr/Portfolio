import Button from '@/ui/components/Button';
import { Flex, Text } from '@chakra-ui/react';
import Photo from './components/Photo';
import * as S from './animations';
import { useEffect } from 'react';

import Typed from 'typed.js';

const Home = () => {
  useEffect(() => {
    new Typed('#i-am-text', {
      strings: ['Dev Frontend', 'Dev Mobile', 'Andrei Amaral'],
      typeSpeed: 70,
      backSpeed: 70,
    });
  }, []);

  return (
    <S.AnimationContainer>
      <Flex
        // bgGradient="linear(to-r, blue.500, blue.600)"
        // height="55vh"
        background="blue.600"
        padding="2vh"
        width="100%"
        alignItems="center"
        flexDirection={['column', 'column', 'row']}
        paddingTop="25px"
        position="relative"
        transition="all 0.2s"
      >
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Text fontSize={['4vw', '4vw', '2.5vw']}>Olá, eu sou</Text>
          <Text
            fontSize={['8vw', '8vw', '6vw']}
            color="purple.800"
            // className="i-am-text"
            textAlign={'left'}
            id="i-am-text"
            height="5vh"
          ></Text>
          <Text
            fontSize={['3vw', '3vw', '2vw']}
            color="gray.600"
            maxW="75vw"
            textAlign="center"
            id="small-text"
            margin={['0', '15px 0 0']}
          >
            Desenvolvedor FullStack com foco no frontend web e mobile.
          </Text>

          <Flex marginTop="33px" gap="12px">
            <Button
              bgColor="yellow.800"
              label="Contrate-me"
              onClick={() => {
                console.log('hire me');
              }}
              labelColor="white"
            />
            <Button
              bgColor="transparent"
              label="Meus trabalhos"
              onClick={() => {
                console.log('meus jobs');
              }}
              labelColor="purple.700"
              noShadow
            />
          </Flex>
        </Flex>
        <Photo />
      </Flex>
    </S.AnimationContainer>
  );
};

export default Home;
