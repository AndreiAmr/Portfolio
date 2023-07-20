import Waves from '@/ui/components/Waves';
import { Box, Flex, Text } from '@chakra-ui/react';
import Filters from './components/Filters';
import Item from './components/Item';
import AmaggiWeb from '@assets/images/amaggi-web.png';
import AmaggiMobile from '@assets/images/amaggi-mobile.png';
import BomFuturoMobile from '@assets/images/bom-futuro-mobile.png';

const Jobs = () => {
  return (
    <Flex
      width="100%"
      background="background"
      position="relative"
      flexDirection="column"
    >
      <Flex
        height="25vh"
        flexDirection="column"
        alignItems="center"
        width="100%"
        background="purple.800"
        paddingTop="40px"
        position="relative"
      >
        <Text color="white" fontWeight="normal" fontSize="1.5vh">
          Meus Jobs
        </Text>
        <Text color="white" fontWeight="bold" fontSize="2.5vh">
          JOBS FEITOS
        </Text>
        <Filters />
        <Box position="absolute" bottom="-9vh" width="100%" height="10vh">
          <Waves />
        </Box>
      </Flex>
      <Flex
        zIndex={1}
        justifyContent="center"
        alignItems="center"
        gap="20px"
        // my="50px"
        wrap="wrap"
      >
        <Item imgSrc={AmaggiWeb} />
        <Item imgSrc={AmaggiMobile} />
        <Item imgSrc={BomFuturoMobile} />
      </Flex>
    </Flex>
  );
};

export default Jobs;
