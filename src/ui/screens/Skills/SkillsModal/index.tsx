import { ControllerContext } from '@/infra/contexts/Controllers.context';
import {
  Box,
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { MdOutlineClose } from 'react-icons/md';

import { useContext } from 'react';
import { techIcons } from '@/infra/helpers/tech-icons';
import SkillName from '../components/SkillName';

interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SkillsModal = ({ isOpen, onClose }: SkillsModalProps) => {
  const {
    items: { currentLanguage },
  } = useContext(ControllerContext);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        width="90%"
        maxW="1000px"
        // pt="25px"
        background="background"
        position="relative"
        padding="10px"
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
          margin="25px"
          borderBottom="1px solid"
          borderBottomColor="gray.500"
          paddingBottom="10px"
          fontSize={['4vw', '4vw', '4vw', '25px']}
          fontWeight="semibold"
          color="gray.800"
        >
          {currentLanguage.skills.modalTitle}
        </Text>

        <Flex wrap="wrap" gridGap="15px" margin="25px" justifyContent="center">
          {Object.keys(techIcons).map((iconName) => {
            const { icon, name } =
              techIcons[iconName as keyof typeof techIcons];

            return <SkillName icon={icon} name={name} />;
          })}
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default SkillsModal;
