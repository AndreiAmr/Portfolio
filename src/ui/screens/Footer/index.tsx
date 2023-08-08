import { useContext } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import SocialButton from './components/SocialButton';
import { BsGithub, BsWhatsapp } from 'react-icons/bs';

import { AiFillLinkedin } from 'react-icons/ai';
import Info from './components/Info';
import LocationIcon from '@assets/icons/location.svg';
import PhoneIcon from '@assets/icons/phone-icon.svg';
import EmailIcon from '@assets/icons/email.svg';
import { ControllerContext } from '@/infra/contexts/Controllers.context';

const Footer = () => {
  const {
    items: { isAnimating },
  } = useContext(ControllerContext);

  return (
    <Flex
      background="purple.800"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      paddingTop="40px"
    >
      <Flex>
        <Text color="yellow.800" fontSize={['4vw', '4vw', '4vw', '36px']}>
          {'<'}
        </Text>
        <Text color="white" fontSize={['4vw', '4vw', '4vw', '36px']}>
          Andrei Amaral
        </Text>
        <Text color="yellow.800" fontSize={['4vw', '4vw', '4vw', '36px']}>
          /{'>'}
        </Text>
      </Flex>

      <Flex gap="30px" mt="20px">
        <SocialButton icon={<BsGithub />} />
        <SocialButton icon={<AiFillLinkedin />} />
        <SocialButton icon={<BsWhatsapp />} color="green.800" />
      </Flex>

      <Flex
        width="80vw"
        my="5vh"
        gap="35px"
        wrap="wrap"
        justifyContent="center"
      >
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
          title="E-mail"
          description="andreiamaral74@gmail.com"
          iconSrc={EmailIcon}
        />
      </Flex>
      <Flex
        borderTop="1px solid white"
        width="100%"
        background="blue.600"
        flex={1}
        p="20px"
      >
        <Text
          textAlign="center"
          margin="0 auto"
          color="purple.800"
          fontWeight="semibold"
          className={`${isAnimating && 'change-animate'}`}
          display="inline"
        >
          Desenvolvido com ReactJS por Andrei Amaral
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
