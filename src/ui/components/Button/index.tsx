import { Button as ChakraButton } from '@chakra-ui/react';

interface ButtonProps {
  onClick: () => void;
  bgColor: string;
  label: string;
  labelColor: string;
  noShadow?: boolean;
}

const Button = ({
  label,
  onClick,
  bgColor,
  labelColor,
  noShadow,
}: ButtonProps) => {
  return (
    <ChakraButton
      onClick={onClick}
      // width="125px"
      // height={'40px'}
      height="3.5vh"
      borderRadius="10px"
      background={bgColor}
      boxShadow={
        !noShadow ? '7px 7px 15px #d4e0e6, -7px -7px 15px #ffffff' : 'none'
      }
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
