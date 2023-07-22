import { Box, Textarea } from '@chakra-ui/react';

export const TextArea = () => {
  return (
    <Box
      backgroundImage="linear-gradient(145deg, blue.700, #ffffff)"
      boxShadow="2px 2px 17px #cccfd950, -2px -2px 17px #ffffff50"
      borderRadius="10px"
      overflow="hidden"
      border="1pxs solid white"
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
      <Textarea
        placeholder="Mensagem"
        resize="none"
        outline="none"
        border="none"
        autoComplete="none"
      />
    </Box>
  );
};

export default TextArea;
