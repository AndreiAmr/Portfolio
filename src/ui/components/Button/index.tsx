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
      backgroundImage={`linear-gradient(145deg, ${bgColor} 70%, #d4e0e6)`}
      boxShadow="7px 7px 15px #d4e0e6,
      -7px -7px 15px #ffffff"
      _hover={{}}
      _active={{}}
      _focus={{}}
      color={labelColor}
      fontWeight="medium"
      fontSize={'1.5vh'}
    >
      {label}
    </ChakraButton>
  );
};

export default Button;
