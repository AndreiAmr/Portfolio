import { Box, Flex, Image, Text } from '@chakra-ui/react';

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
}

const Service = ({ icon, title, description }: ServiceProps) => {
  return (
    <Flex
      height={['173px', '173px', '173px', '200px']}
      width="95vw"
      maxWidth={['450px', '450px', '450px', '650px']}
      borderRadius="25px"
      boxShadow="20px 20px 60px #d4d4d4, -20px -20px 60px #ffffff"
      alignItems="center"
      padding="12px"
      paddingLeft="16px"
      // backgroundImage="linear-gradient(145deg, #e6e6e6, #ffffff)"
      background="white"
      _hover={{
        boxShadow: ` boxShadow="20px 20px 10px #d4d4d4, -20px -20px 60px #ffffff"`,
        transform: 'translateY(-20px) rotate(2deg)',
        '.rotate': {
          transform: ' translateX(10px) rotate(20deg)',
        },
      }}
    >
      <Image
        width={['9vh', '9vh', '9vh', '8vh']}
        height={['9vh', '9vh', '9vh', '8vh']}
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
        >
          {title}
        </Text>
        <Text fontSize="12px" width="90%" color="gray.600" margin="7px 0px 9px">
          {description}
        </Text>
      </Box>
    </Flex>
  );
};

export default Service;
