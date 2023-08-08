import { ControllerContext } from '@/infra/contexts/Controllers.context';
import { ThemeEnum } from '@/infra/contexts/types';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useContext } from 'react';

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
}

const Service = ({ icon, title, description }: ServiceProps) => {
  const {
    items: { theme, isAnimating },
  } = useContext(ControllerContext);

  return (
    <Flex
      height={['173px', '173px', '173px', '200px']}
      width="95vw"
      // maxWidth={['450px', '450px', '450px', '650px']}
      maxWidth={['450px', '450px', '450px', '450px', '500px', '650px']}
      borderRadius="25px"
      boxShadow={
        theme === ThemeEnum.light
          ? '20px 20px 60px #d4d4d4, -20px -20px 60px #ffffff'
          : '  20px 20px 60px #25252a,-20px -20px 60px #333338'
      }
      alignItems="center"
      padding="12px"
      paddingLeft="16px"
      // backgroundImage="linear-gradient(145deg, #e6e6e6, #ffffff)"
      background={
        theme === ThemeEnum.light
          ? 'background'
          : 'linear-gradient(145deg, #28282c, #2f2f34)'
      }
      _hover={{
        transform: 'translateY(-20px) rotate(2deg)',
        '.rotate': {
          transform: ' translateX(10px) rotate(20deg)',
        },
      }}
    >
      <Image
        width={['9vh', '9vh', '9vh', '8vh', '12vh', '8vh']}
        height={['9vh', '9vh', '9vh', '8vh', '12vh', '8vh']}
        maxW="100px"
        maxH="100px"
        src={icon}
        className="rotate"
      />
      <Box marginLeft="25px">
        <Text
          fontSize={['3.3vw', '3.3vw', '3.3vw', '26px']}
          fontWeight="semibold"
          color="gray.800"
          className={`${isAnimating && 'change-animate'}`}
        >
          {title}
        </Text>
        <Text
          fontSize={['12px', '12px', '12px', '12px', '12px', '14px']}
          width="90%"
          color="gray.500"
          margin="7px 0px 9px"
          className={`${isAnimating && 'change-animate'}`}
          fontWeight="regular"
        >
          {description}
        </Text>
      </Box>
    </Flex>
  );
};

export default Service;
