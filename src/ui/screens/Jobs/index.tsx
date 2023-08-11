import { useState, useContext, useCallback } from 'react';
import Waves from '@/ui/components/Waves';
import { Box, Flex, Text, useDisclosure } from '@chakra-ui/react';
import Filters from './components/Filters';
import Item from './components/Item';
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';

import { JobItemProps, TypeEnum, jobsItems, jobsItemsEnglish } from './utils';

import { ControllerContext } from '@/infra/contexts/Controllers.context';
import { LanguageEnum } from '@/infra/contexts/types';
import JobModal from './components/JobModal';

const Jobs = () => {
  const [filter, setFilter] = useState<TypeEnum>(TypeEnum.ALL);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentJob, setCurrentJob] = useState<JobItemProps>();
  const {
    items: {
      isAnimating,
      currentLangEnum,
      currentLanguage: { jobs },
    },
  } = useContext(ControllerContext);

  console.log(isOpen);

  const renderItemsPortugues = useCallback(() => {
    return jobsItems.map((prop) => {
      if (filter === TypeEnum.ALL) {
        return (
          <Item
            {...prop}
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
          {...prop}
          imgSrc={prop.imgSrc}
          onClick={onOpen}
          description={prop.description[0]}
        />
      );
    });
  }, [filter]);

  const renderItemsEnglish = useCallback(() => {
    return jobsItemsEnglish.map((prop) => {
      if (filter === TypeEnum.ALL) {
        return (
          <Item
            {...prop}
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
          {...prop}
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
              className={`${isAnimating && 'change-animate'}`}
            >
              {jobs.title}
            </Text>

            <Text
              color="white"
              fontWeight="bold"
              fontSize={['4vw', '4vw', '4vw', '36px']}
              // mb="15px"
              className={`${isAnimating && 'change-animate'}`}
            >
              {jobs.subtitle}
            </Text>
          </Fade>

          <Filters filter={filter} changeFilter={setFilter} />
          <Box
            position="absolute"
            bottom="-9vh"
            width="100%"
            height="10vh"
            zIndex={1}
            mt={['0', '0', '0', '0', '200px']}

            // top="20vh"
          >
            <Waves />
          </Box>
        </Flex>

        <Flex
          width="100vw"
          alignItems="center"
          justifyContent="center"
          pt="2vh"
          maxWidth={['none', 'none', 'none', 'none', 'none', '60vw']}
          margin={['0 auto', '0 auto', '0 auto', '40px auto']}
          zIndex={9}
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
              {currentLangEnum === LanguageEnum.portugues
                ? renderItemsPortugues()
                : renderItemsEnglish()}
            </Fade>
          </motion.div>
        </Flex>
      </Flex>
      <JobModal isOpen={isOpen} job={currentJob} onClose={onClose} />
    </>
  );
};

export default Jobs;
