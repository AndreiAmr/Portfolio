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
      fontSize="2.5vh"
      color={color}
      borderRadius="50%"
      height="5vh"
      width="5vh"
      backgroundImage="linear-gradient(145deg, #6a47bb, #7e55df)"
      boxShadow="13px 13px 26px #6443b1,
      -13px -13px 26px #885bef"
    />
  );
};
export default SocialButton;
