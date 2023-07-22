import { Button, Flex, Image, Text } from '@chakra-ui/react';

import { RxCopy } from 'react-icons/rx';

interface InfoProps {
  title: string;
  iconSrc: string;
  description: string;
}

const Info = ({ description, iconSrc, title }: InfoProps) => {
  return (
    <Button
      width="100%"
      height="7vh"
      borderRadius="7px"
      backgroundImage="linear-gradient(145deg, #6a47bb, #7e55df)"
      boxShadow="0px 0px 10px #6443b100,
      -0px -0px 17px #885bef00"
      opacity={0.8}
      _active={{
        boxShadow: '7px 7px 17px #6443b1, -7px -7px 17px #885bef',
        opacity: 1,
      }}
      _focus={{
        boxShadow: '7px 7px 17px #6443b1, -7px -7px 17px #885bef',
        opacity: 1,
      }}
      _hover={{
        boxShadow: '7px 7px 17px #6443b1, -7px -7px 17px #885bef',
        opacity: 1,
      }}
    >
      <Flex flex={1} alignItems="center" gap="20px">
        <Flex
          height="5.5vh"
          width="5.5vh"
          alignItems="center"
          justifyContent="center"
          borderRadius="50%"
          boxShadow="inset 9px 9px 17px #6443b1,
            inset -9px -9px 17px #885bef"
        >
          <Image src={iconSrc} width="2vh" />
        </Flex>

        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          padding="10px"
        >
          <Text fontSize="1.4vh" mb="5px" fontWeight="light" color="purple.600">
            {title}
          </Text>
          <Text fontWeight="bold" color="white">
            {description}
          </Text>
        </Flex>
      </Flex>
      <Text color="white" fontSize="4vw">
        <RxCopy />
      </Text>
    </Button>
  );
};

export default Info;
