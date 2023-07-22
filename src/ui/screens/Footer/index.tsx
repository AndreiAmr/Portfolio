import { Flex, Text } from '@chakra-ui/react';
import SocialButton from './components/SocialButton';
import { BsGithub, BsWhatsapp } from 'react-icons/bs';

import { AiFillLinkedin } from 'react-icons/ai';
import Info from './components/Info';
import LocationIcon from '@assets/icons/location.svg';
import PhoneIcon from '@assets/icons/phone-icon.svg';
import EmailIcon from '@assets/icons/email.svg';

const Footer = () => {
  return (
    <Flex
      background="purple.800"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      paddingTop="40px"
    >
      <Flex>
        <Text color="yellow.800" fontSize="4vw">
          {'<'}
        </Text>
        <Text color="white" fontSize="4vw">
          Andrei Amaral
        </Text>
        <Text color="yellow.800" fontSize="4vw">
          /{'>'}
        </Text>
      </Flex>

      <Flex gap="30px" mt="20px">
        <SocialButton icon={<BsGithub />} />
        <SocialButton icon={<AiFillLinkedin />} />
        <SocialButton icon={<BsWhatsapp />} color="green.800" />
      </Flex>

      <Flex flexDirection="column" width="80vw" my="5vh" gap="35px">
        <Info
          title="Endereço"
          description="Brasil - São Paulo/SP"
          iconSrc={LocationIcon}
        />
        <Info
          title="Telefone"
          description="(+55) 11 98101-5103"
          iconSrc={PhoneIcon}
        />
        <Info
          title="Telefone"
          description="(+55) 11 98101-5103"
          iconSrc={EmailIcon}
        />
      </Flex>
      <Flex borderTop="1px solid white" width="100%" mb="20px">
        <Text textAlign="center" width="100%" mt="30px" color="white">
          Desenvolvido com ReactJS por Andrei Amaral
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
