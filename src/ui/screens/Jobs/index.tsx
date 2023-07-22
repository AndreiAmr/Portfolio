import { useState } from 'react';
import Waves from '@/ui/components/Waves';
import { Box, Flex, Text } from '@chakra-ui/react';
import Filters from './components/Filters';
import Item from './components/Item';
import { motion } from 'framer-motion';

import { TypeEnum, jobsItems } from './utils';

const Jobs = () => {
  const [filter, setFilter] = useState<TypeEnum>(TypeEnum.ALL);
  return (
    <Flex
      width="100%"
      background="background"
      position="relative"
      flexDirection="column"
      paddingBottom="50px"
    >
      <Flex
        height="25vh"
        flexDirection="column"
        alignItems="center"
        width="100%"
        background="purple.800"
        paddingTop="40px"
        position="relative"
        mb="-40px"
      >
        <Text color="gray.50" fontWeight="normal" fontSize="3.3vw" mb="10px">
          Meus Jobs
        </Text>
        <Text color="white" fontWeight="bold" fontSize="4vw">
          JOBS FEITOS
        </Text>
        <Filters filter={filter} changeFilter={setFilter} />
        <Box position="absolute" bottom="-9vh" width="100%" height="10vh">
          <Waves />
        </Box>
      </Flex>
      <Flex
        zIndex={1}
        justifyContent="center"
        alignItems="center"
        gap="20px"
        wrap="wrap"
      >
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          layout
          style={{
            width: '100%',
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          {jobsItems.map((prop) => {
            if (filter === TypeEnum.ALL) {
              return <Item imgSrc={prop.imgSrc} />;
            }

            if (prop.type !== filter) {
              return;
            }
            return <Item imgSrc={prop.imgSrc} />;
          })}
        </motion.div>
      </Flex>
    </Flex>
  );
};

export default Jobs;
