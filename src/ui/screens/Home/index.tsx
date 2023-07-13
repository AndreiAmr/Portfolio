import Button from '@/ui/components/Button';
import { Box, Flex, Text } from '@chakra-ui/react';
import Photo from './components/Photo';
import * as S from './animations';
import { useEffect, useState } from 'react';

const Home = () => {
  const [iamText, setIamText] = useState<string>('Andrei Amaral');

  const toggleIAM = () => {
    setTimeout(() => {
      setIamText('Andrei Amaral');
    }, 0);

    setTimeout(() => {
      setIamText('Dev Frontend');
    }, 3000);
    setTimeout(() => {
      setIamText('Dev Mobile');
    }, 6000);
    setTimeout(() => {
      setIamText('Dev NodeJS');
    }, 9000);
  };

  useEffect(() => {
    toggleIAM();
    setInterval(toggleIAM, 9000);
  }, []);

  return (
    <S.AnimationContainer>
      <Flex
        bgGradient="linear(to-r, #F0F4FF,#ECF9FF)"
        // height="55vh"
        padding="2vh"
        width="100%"
        alignItems="center"
        flexDirection={['column', 'column', 'row']}
        paddingTop="25px"
        position="relative"
      >
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Text fontSize="4vw">Olá, eu sou</Text>
          <Text
            fontSize={'8vw'}
            color="purple.800"
            className="i-am-text"
            textAlign={'left'}
          >
            {iamText}
          </Text>
          <Text
            fontSize={'3vw'}
            color="gray.600"
            maxW="75vw"
            textAlign="center"
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
              bgColor="#D9E3FF"
              label="Meus trabalhos"
              onClick={() => {
                console.log('meus jobs');
              }}
              labelColor="purple.700"
            />
          </Flex>
        </Flex>
        <Photo />
      </Flex>
    </S.AnimationContainer>
  );
};

export default Home;
