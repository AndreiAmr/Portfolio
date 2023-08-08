import { Flex, Image, Text } from '@chakra-ui/react';

// import { useState } from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ItemProps {
  imgSrc: string;
  onClick: () => void;
  description: string;
  paddingTop?: boolean;
  title: string;
}

const Item = ({
  imgSrc,
  description,
  onClick,
  paddingTop,
  title,
}: ItemProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0, marginTop: 30 }}
      layout
      style={{
        width: '90vw',
        maxWidth: '500px',
        height: '34vh',
        maxHeight: '250px',

        background: '#ffffff20',
        // backgroundImage: `url(${imgSrc})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        borderRadius: 10,
        position: 'relative',
        boxShadow: ' 4px 4px 8px 0px rgba(0, 0, 0, 0.25) inset',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '15px',
        display: 'flex',
        flexWrap: 'wrap',
        // margin: '0 auto',

        overflow: 'hidden',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      onClick={onClick}
    >
      <Image src={imgSrc} position="absolute" top={paddingTop ? '10%' : '0'} />
      <Flex
        position="absolute"
        top={0}
        borderRadius={10}
        bottom={0}
        right={0}
        left={0}
        background="linear-gradient(180deg, rgba(0, 0, 0, 0.80) 0%, #000 100%)"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        paddingX="16px"
        transition="all .3s"
        transform={isFocused ? 'rotate(0) scale(1)' : 'rotate(3deg) scale(1.2)'}
        opacity={isFocused ? 1 : 0}
        pointerEvents="none"
      >
        <Text
          color="white"
          fontSize={['2vh', '2vh', '2vh', '2vh', '3.3vh', '2vh']}
          fontWeight="semibold"
          mb="1%"
          textAlign="left"
          width="100%"
        >
          {title}
        </Text>
        <Text
          color="gray.500"
          fontSize={['1.5vh', '1.5vh', '1.5vh', '1.5vh', '2.9vh', '1.5vh']}
          fontWeight="regular"
        >
          {description.slice(0, 80)}...
        </Text>

        <Text
          color="yellow.800"
          // fontSize="1.8vh"
          fontWeight="regular"
          mt="5%"
          width="100%"
          fontSize={['1.3vh', '1.3vh', '1.3vh', '1.3vh', '2.9vh', '1.3vh']}
        >
          Ver mais
        </Text>
      </Flex>
    </motion.div>
  );
};

export default Item;
