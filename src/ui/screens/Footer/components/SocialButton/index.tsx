import { IconButton } from '@chakra-ui/react';

interface SocialButtonProps {
  icon: JSX.Element;
  color?: string;
}

const SocialButton = ({ icon, color }: SocialButtonProps) => {
  return (
    <IconButton
      aria-label=""
      icon={icon}
      colorScheme=""
      fontSize={['2.3vh', '2.3vh', '2.3vh', '26px']}
      color={color}
      borderRadius="50%"
      height="5vh"
      width="5vh"
      maxH="50px"
      maxW="50px"
      backgroundImage="linear-gradient(145deg, #6a47bb, #7e55df)"
      boxShadow="13px 13px 26px #6443b1,
      -13px -13px 26px #885bef"
    />
  );
};
export default SocialButton;
