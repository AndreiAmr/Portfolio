import { IconButton, Image } from '@chakra-ui/react';

interface ControllerButtonProps {
  icon: string;
  onClick?: () => void;
}

const ControllerButton = ({ icon, onClick }: ControllerButtonProps) => {
  return (
    <IconButton
      onClick={onClick}
      height="6vh"
      width="6vh"
      borderRadius="50%"
      icon={<Image width="3vh" height="3vh" src={icon} />}
      boxShadow="0px 3px 4px 1px rgba(0, 0, 0, 0.25) "
      aria-label="toggle-mode"
      background="controllerBackground !important"
      transition="all .5s"
      _active={{
        opacity: 0.7,
        boxShadow: 'none',
        transition: 'all 0.2s',
      }}
    ></IconButton>
  );
};

export default ControllerButton;
