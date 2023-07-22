import Input from '@/ui/components/Input';
import TextArea from '@/ui/components/TextArea';
import { Button, Flex, Text } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Flex
      width="100%"
      background="blue.600"
      flexDir="column"
      justifyContent="center"
      padding="40px 48px"
    >
      <Text
        textAlign="center"
        color="purple.800"
        fontWeight="semibold"
        fontSize="3.3vw"
        marginBottom="10px"
      >
        Entre em contato
      </Text>
      <Text
        textAlign="center"
        color="gray.700"
        fontWeight="bold"
        fontSize="4vw"
      >
        Alguma dúvida ? Sinta-se a vontade para me contatar
      </Text>

      <Flex mt="4vh" flexDirection="column" gap="19px">
        <Input placeholder="Nome" />
        <Input placeholder="E-mail" />
        <Input placeholder="Telefone" />
        <Input placeholder="Título" />
        <TextArea />
        <Button
          bgColor="yellow.800"
          onClick={() => {}}
          color="white"
          borderRadius="10px"
          backgroundImage="linear-gradient(145deg, #ffcc44, #e6ac3a)"
          boxShadow="9px 9px 17px #c9d4d9,
          -9px -9px 17px #ffffff"
          _active={{ opacity: 0.7 }}
          _focus={{}}
          _hover={{}}
        >
          Enviar
        </Button>
      </Flex>
    </Flex>
  );
};

export default Contact;
