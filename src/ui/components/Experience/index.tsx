import { Flex, Text } from '@chakra-ui/react';

import Percentage from './Percentage';

interface ExperienceProps {
  color: string;
  title: string;
  description: string;
  percentage: number;
}

const Experience = ({
  color,
  title,
  description,
  percentage,
}: ExperienceProps) => {
  return (
    <Flex
      width="95vw"
      // maxWidth="450px"
      maxWidth={['450px', '450px', '450px', '650px']}
      background="linear-gradient(145deg, #d4e0e6, #fdffff)"
      borderRadius="25px"
      my="10px"
      padding="40px 14px"
      alignItems="center"
      justifyItems="center"
      boxShadow=" 20px 20px 60px #c9d4d9,
      -20px -20px 60px #ffffff"
      _hover={{
        boxShadow: ` boxShadow="20px 20px 10px #d4d4d4, -20px -20px 60px #ffffff"`,
        transform: 'translateY(-20px) rotate(-2deg)',
        '.rotate': {
          transform: ' translateX(10px) rotate(-20deg)',
        },
      }}
    >
      <Flex className="rotate" transform="scale(0.9)">
        <Percentage color={color} percentage={percentage} />
      </Flex>

      <Flex flexDirection="column" marginLeft="33px" alignItems="flex-start">
        <Text
          fontSize={['3vh', '3vh', '2.5vh']}
          mb="0.8vh"
          fontWeight="semibold"
        >
          {title}
        </Text>
        <Text
          fontSize="1.3vh"
          fontWeight="regular"
          color="gray.500"
          // marginBottom="20px"
        >
          {description}
        </Text>

        {/* <Box borderBottom={`2px solid ${color}`}>
          <Text color={color} fontWeight="semibold">
            Ler mais
          </Text>
        </Box> */}
      </Flex>
    </Flex>
  );
};

export default Experience;
