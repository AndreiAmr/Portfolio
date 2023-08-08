import Button from '@/ui/components/Button';

import Input from '@/ui/components/Input';
import TextArea from '@/ui/components/TextArea';
import { Flex, Text } from '@chakra-ui/react';
import { Fade, Zoom } from 'react-awesome-reveal';
import useContact from './hooks/useContact';
import { useContext } from 'react';
import { ControllerContext } from '@/infra/contexts/Controllers.context';

const Contact = () => {
  const {
    items: { values, errors },
    handlers: { handleChange, handleSubmit },
  } = useContact();

  const {
    items: {
      isAnimating,
      currentLanguage: { contact },
    },
  } = useContext(ControllerContext);

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
      <Flex flexDirection="column" alignItems="center">
        <Fade cascade>
          <Text
            textAlign="center"
            color="purple.800"
            fontWeight="semibold"
            fontSize={['3.3vw', '3.3vw', '3.3vw', '26px']}
            marginBottom="10px"
            className={`${isAnimating && 'change-animate'}`}
          >
            {contact.title}
          </Text>
          <Text
            textAlign="center"
            color="gray.800"
            fontWeight="bold"
            fontSize={['4vw', '4vw', '4vw', '36px']}
            mb="4vh"
            className={`${isAnimating && 'change-animate'}`}
          >
            {contact.subtitle}
          </Text>
        </Fade>
      </Flex>

      <Flex
        mt="4vh"
        gap="2.5vh"
        maxWidth="1500px"
        // alignItems="center"
        justifyContent="center"
        margin="0 auto"
        wrap="wrap"
      >
        <Zoom cascade duration={500}>
          <Input
            name="name"
            onChange={handleChange}
            value={values.name}
            placeholder="Nome"
            error={errors.name}
          />
          <Input
            name="email"
            onChange={handleChange}
            value={values.email}
            error={errors.email}
            placeholder="E-mail"
          />

          <Input
            name="title"
            onChange={handleChange}
            value={values.title}
            error={errors.title}
            placeholder="Título"
          />
          <TextArea
            name="description"
            onChange={handleChange}
            value={values.description}
            error={errors.description}
          />
        </Zoom>
      </Flex>
      <Flex justifyContent="flex-end" width="90vw" maxW="1320px" mt="2vh">
        <Zoom delay={500}>
          <Button
            bgColor="yellow.800"
            label="Enviar e-mail"
            labelColor="white"
            onClick={handleSubmit}
          />
        </Zoom>
      </Flex>
    </Flex>
  );
};

export default Contact;
