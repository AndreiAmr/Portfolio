import Service from '@/ui/components/Service';
import { Box, Flex, Text } from '@chakra-ui/react';
import DevelopmentIcon from '@assets/images/development.png';
import AppDev from '@assets/images/app-development.png';
import UiUx from '@assets/images/ui-ux.png';
import WebDesign from '@assets/images/web-design.png';
import Button from '@/ui/components/Button';

const About = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      flex={1}
      background="background"
      paddingTop="3vh"
      padding="24px"
    >
      <Text color="purple.800" fontSize="3.3vw" fontWeight="semibold">
        Minha especialidade
      </Text>
      <Text
        maxW="75vw"
        textAlign="center"
        fontWeight="semibold"
        mt="12px"
        fontSize="4vw"
        marginBottom="30px"
      >
        COM AMPLA EXPERIENCIA EM SERVIÇOS DIGITAIS
      </Text>

      <Flex
        flexDirection="row"
        gridGap="20px"
        wrap="wrap"
        justifyContent="center"
      >
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
      </Flex>

      <Flex
        flexDirection="row-reverse"
        flex={1}
        width="100%"
        marginY="4vh"
        marginBottom="4vh"
      >
        <Button
          bgColor="yellow.800"
          label="Baixar curriculo"
          labelColor="white"
          onClick={() => {
            console.log('BAIXAR');
          }}
        />
      </Flex>
    </Flex>
  );
};

export default About;
