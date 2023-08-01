import Button from '@/ui/components/Button';

import Input from '@/ui/components/Input';
import TextArea from '@/ui/components/TextArea';
import { Flex, Text } from '@chakra-ui/react';
import { Fade, Zoom } from 'react-awesome-reveal';

const Contact = () => {
  return (
    <Flex
      width="100%"
      // minHeight="75vh"
      height={['none', 'none', 'none', '75vh']}
      py="5vh"
      background="blue.600"
      flexDir="column"
      justifyContent="center"
      id="contact-container"
      position="relative"
    >
      <Fade cascade>
        <Text
          textAlign="center"
          color="purple.800"
          fontWeight="semibold"
          fontSize={['3.3vw', '3.3vw', '3.3vw', '26px']}
          marginBottom="10px"
        >
          Entre em contato
        </Text>
        <Text
          textAlign="center"
          color="gray.700"
          fontWeight="bold"
          fontSize={['4vw', '4vw', '4vw', '36px']}
          mb="4vh"
        >
          Alguma dúvida ? Sinta-se a vontade para me contatar
        </Text>
      </Fade>

      <Flex
        mt="4vh"
        gap="19px"
        maxWidth="1500px"
        // alignItems="center"
        justifyContent="center"
        margin="0 auto"
        wrap="wrap"
      >
        <Zoom cascade duration={500}>
          <Input placeholder="Nome" />
          <Input placeholder="E-mail" />
          <Input placeholder="Telefone" />
          <Input placeholder="Título" />
          <TextArea />
        </Zoom>
      </Flex>
      <Flex justifyContent="flex-end" width="90vw" maxW="1320px" mt="2vh">
        <Button
          bgColor="yellow.800"
          label="Enviar e-mail"
          labelColor="white"
          onClick={() => {}}
        />
      </Flex>
    </Flex>
  );
};

export default Contact;
