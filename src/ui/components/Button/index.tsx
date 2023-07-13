import { Button as ChakraButton } from '@chakra-ui/react';

interface ButtonProps {
  onClick: () => void;
  bgColor: string;
  label: string;
  labelColor: string;
}

const Button = ({ label, onClick, bgColor, labelColor }: ButtonProps) => {
  return (
    <ChakraButton
      onClick={onClick}
      width="125px"
      height={'40px'}
      borderRadius="20px"
      bgColor={bgColor}
      boxShadow="4px 4px 4px 0px rgba(0, 0, 0, 0.25) inset"
      _hover={{}}
      _active={{}}
      _focus={{}}
      color={labelColor}
      fontWeight="medium"
      fontSize={'14px'}
    >
      {label}
    </ChakraButton>
  );
};

export default Button;
