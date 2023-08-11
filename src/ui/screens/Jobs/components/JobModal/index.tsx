import {
  Box,
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { JobItemProps } from '../../utils';
import { getTechIcon } from '@/infra/helpers/tech-icons';
import { MdOutlineClose } from 'react-icons/md';

interface JobModalProps {
  isOpen: boolean;
  onClose: () => void;
  job?: JobItemProps;
}

const JobModal = ({ isOpen, job, onClose }: JobModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        width="90%"
        maxW="1000px"
        // pt="25px"
        background="background"
        position="relative"
      >
        <Box
          position="absolute"
          right="-55px"
          top="-55px"
          onClick={onClose}
          cursor="pointer"
        >
          <MdOutlineClose fontSize="2.5rem" color="white" />
        </Box>
        <Text
          fontWeight="bold"
          fontSize={['4vw', '4vw', '4vw', '30px']}
          margin="0px 7%"
          py="10px"
          marginTop={['-40px', '-40px', '20px']}
          marginBottom={['40px', '40px', '20px']}
          borderBottom="1px solid"
          borderBottomColor="gray.600"
        >
          {job?.title}
        </Text>
        <Box
          width="100%"
          backgroundImage={job?.imgSrc}
          height="35vh"
          backgroundSize="contain"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
        ></Box>

        <Flex flexDir="column" gap="10px">
          {job?.description.map((item) => (
            <Text
              fontWeight="regular"
              fontSize={['3.3vw', '3.3vw', '3.3vw', '18px']}
              marginLeft="7%"
              width="85%"
              color="gray.500"
            >
              {item}
            </Text>
          ))}
        </Flex>

        <Flex
          width="86%"
          borderTop="1px solid"
          borderTopColor="gray.600"
          margin="5vh auto"
          justifyContent="center"
          alignItems="center"
          padding="20px"
          gap="15px"
          fontSize={['5vw', '5vw', '5vw', '36px']}
          wrap="wrap"
        >
          {job?.techs.map((item) => (
            <Tooltip label={item} closeOnClick={false}>
              <Text> {getTechIcon(item).icon}</Text>
            </Tooltip>
          ))}
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default JobModal;
