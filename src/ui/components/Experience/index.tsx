import { useContext } from 'react';
import { Flex, Text } from '@chakra-ui/react';

import Percentage from './Percentage';
import { ControllerContext } from '@/infra/contexts/Controllers.context';
import { ThemeEnum } from '@/infra/contexts/types';

interface ExperienceProps {
  color: string;
  title: string;
  description: string;
  percentage: number;
  isAnimating?: boolean;
}

const Experience = ({
  color,
  title,
  description,
  percentage,
  isAnimating,
}: ExperienceProps) => {
  const {
    items: { theme },
  } = useContext(ControllerContext);

  return (
    <Flex
      width="95vw"
      // maxWidth="450px"
      maxWidth={['450px', '450px', '450px', '450px', '500px', '650px']}
      backgroundImage="linear-gradient(145deg, blue.400, background)"
      borderRadius="25px"
      my="10px"
      padding="40px 14px"
      alignItems="center"
      justifyItems="center"
      boxShadow={
        theme === ThemeEnum.light
          ? '20px 20px 60px #c9d4d9, -20px -20px 60px #ffffff'
          : '20px 20px 60px #1a1a1e, -20px -20px 60px #242428'
      }
      _hover={{
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
          transition="all .2s !important"
          className={`${isAnimating && 'change-animate'}`}
        >
          {title}
        </Text>
        <Text
          fontSize={['1.3vh', '1.3vh', '1.3vh', '1.3vh', '1.9vh', '1.3vh']}
          fontWeight="regular"
          color="gray.500"
          // marginBottom="20px"
          className={`${isAnimating && 'change-animate'}`}
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
