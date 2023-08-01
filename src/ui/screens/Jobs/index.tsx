import { useState, useCallback } from 'react';
import Waves from '@/ui/components/Waves';
import {
  Box,
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import Filters from './components/Filters';
import Item from './components/Item';
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';

import { JobItemProps, TypeEnum, jobsItems } from './utils';
import { getTechIcon } from '@/infra/helpers/tech-icons';

const Jobs = () => {
  const [filter, setFilter] = useState<TypeEnum>(TypeEnum.ALL);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentJob, setCurrentJob] = useState<JobItemProps>();

  console.log(isOpen);

  const renderItems = useCallback(() => {
    return jobsItems.map((prop) => {
      if (filter === TypeEnum.ALL) {
        return (
          <Item
            imgSrc={prop.imgSrc}
            onClick={() => {
              setCurrentJob(prop);
              onOpen();
            }}
            description={prop.description[0]}
          />
        );
      }

      if (prop.type !== filter) {
        return;
      }
      return (
        <Item
          imgSrc={prop.imgSrc}
          onClick={onOpen}
          description={prop.description[0]}
        />
      );
    });
  }, [filter]);

  return (
    <>
      <Flex
        width="100%"
        background="background"
        position="relative"
        flexDirection="column"
        paddingBottom={['initial', 'initial', 'initial', '20vh']}
        id="jobs-container"
      >
        <Flex
          height="25vh"
          flexDirection="column"
          alignItems="center"
          width="100%"
          background="purple.800"
          position="relative"
          mb="-40px"
          paddingTop={['3vh', '3vh', '3vh', '5vh']}
        >
          <Fade cascade duration={500}>
            <Text
              color="gray.50"
              opacity={0.8}
              fontWeight="normal"
              fontSize={['3.3vw', '3.3vw', '3.3vw', '26px']}
              mb="10px"
            >
              Meus Jobs
            </Text>

            <Text
              color="white"
              fontWeight="bold"
              fontSize={['4vw', '4vw', '4vw', '36px']}
              // mb="15px"
            >
              TRABALHOS EXECUTADOS
            </Text>
          </Fade>
          <Filters filter={filter} changeFilter={setFilter} />
          <Box position="absolute" bottom="-9vh" width="100%" height="10vh">
            <Waves />
          </Box>
        </Flex>

        <Flex
          width="100vw"
          alignItems="center"
          justifyContent="center"
          pt="2vh"
          maxWidth={['none', 'none', 'none', 'none', '60vw']}
          margin={['0 auto', '0 auto', '0 auto', '40px auto']}
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
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Fade cascade duration={200}>
              {renderItems()}
            </Fade>
          </motion.div>
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          width="90%"
          maxW="1000px"
          // pt="25px"
          background="background"
        >
          <Box
            width="100%"
            backgroundImage={currentJob?.imgSrc}
            height="35vh"
            backgroundSize="contain"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
          ></Box>
          <Text
            fontWeight="bold"
            fontSize={['4vw', '4vw', '4vw', '30px']}
            marginLeft="7%"
            marginTop={['-40px', '-40px', '20px']}
            marginBottom={['40px', '40px', '20px']}
          >
            {currentJob?.title}
          </Text>

          <Flex flexDir="column" gap="10px">
            {currentJob?.description.map((item) => (
              <Text
                fontWeight="regular"
                fontSize={['3.3vw', '3.3vw', '3.3vw', '18px']}
                marginLeft="7%"
                width="85%"
              >
                {item}
              </Text>
            ))}
          </Flex>

          <Flex
            width="86%"
            borderTop="1px solid black"
            margin="5vh auto"
            justifyContent="center"
            alignItems="center"
            padding="20px"
            gap="15px"
            fontSize={['5vw', '5vw', '5vw', '36px']}
            wrap="wrap"
          >
            {currentJob?.techs.map((item) => (
              <Tooltip label={item} closeOnClick={false}>
                <Text> {getTechIcon(item)}</Text>
              </Tooltip>
            ))}
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Jobs;
