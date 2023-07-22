import { Box, Input as ChakraInput } from '@chakra-ui/react';

interface InputProps {
  placeholder: string;
}
const Input = ({ placeholder }: InputProps) => {
  return (
    <Box
      backgroundImage="linear-gradient(145deg, blue.700, #ffffff)"
      boxShadow="2px 2px 17px #cccfd950, -2px -2px 17px #ffffff50"
      borderRadius="10px"
      overflow="hidden"
      border="1pxs solid white"
      height="5vh"
      _hover={{
        boxShadow: ' 9px 9px 13px #cccfd9,-9px -9px 13px #ffffff',
      }}
      _active={{
        boxShadow: ' 12px 12px 13px #aaabaf,-12px -12px 13px #ffffff',
      }}
      _focus={{
        boxShadow: ' 9px 9px 13px #cccfd9,-9px -9px 13px #ffffff',
      }}
    >
      <ChakraInput
        outline="none"
        border="none"
        background="none"
        placeholder={placeholder}
        _active={{
          outline: 'none',
        }}
        _focus={{
          outline: 'none',
        }}
        height="100%"
        width="100%"
      />
    </Box>
  );
};

export default Input;
