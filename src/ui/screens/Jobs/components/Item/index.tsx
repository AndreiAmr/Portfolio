import { Flex, Text } from '@chakra-ui/react';
import './css.css';
import { useState } from 'react';

interface ItemProps {
  imgSrc: string;
}

const Item = ({ imgSrc }: ItemProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <Flex
      width="80vw"
      maxW="400px"
      height="20vh"
      backgroundImage={`url(${imgSrc})`}
      backgroundPosition="center 10px"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      borderRadius={10}
      position="relative"
      boxShadow=" 4px 4px 8px 0px rgba(0, 0, 0, 0.25) inset"
      alignItems="center"
      justifyContent="center"
      paddingTop="15px"
      className="hover"
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      zIndex={999999}
      overflow="hidden"
    >
      <Flex
        position="absolute"
        top={0}
        borderRadius={10}
        bottom={0}
        background="linear-gradient(180deg, rgba(0, 0, 0, 0.80) 0%, #000 100%)"
        flexDirection="column"
        justifyContent="center"
        paddingX="16px"
        transition="all .3s"
        transform={isFocused ? 'rotate(0) scale(1)' : 'rotate(3deg) scale(1.2)'}
        opacity={isFocused ? 1 : 0}
        pointerEvents="none"
      >
        <Text color="white" fontSize="2vh" fontWeight="semibold" mt="7%">
          Agrosig
        </Text>
        <Text color="gray.500" fontSize="1.8vh" fontWeight="regular">
          Ipsum, mas a maioria sofreu algum tipo de alteração, seja por inserção
        </Text>

        <Text color="yellow.800" fontSize="1.8vh" fontWeight="regular" mt="10%">
          Ver mais
        </Text>
      </Flex>
    </Flex>
  );
};

export default Item;
