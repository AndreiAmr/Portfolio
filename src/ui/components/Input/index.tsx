import { useContext } from 'react';
import { PiWarningCircleBold } from 'react-icons/pi';
import { Box, Input as ChakraInput, Text } from '@chakra-ui/react';
import { ControllerContext } from '@/infra/contexts/Controllers.context';
import { ThemeEnum } from '@/infra/contexts/types';

interface InputProps {
  value: string;
  error?: string;
  placeholder: string;
  onChange: (e: any) => void;
  name: string;
}

const Input = ({ placeholder, error, name, value, onChange }: InputProps) => {
  const {
    items: { theme },
  } = useContext(ControllerContext);

  return (
    <>
      <Box
        width="80vw"
        maxWidth="500px"
        minHeight={'50px'}
        position="relative"
        // backgroundImage="linear-gradient(145deg, blue.700, #ffffff)"
        // backgroundImage="linear-gradient(145deg, blue.400, background)"
        background="background"
        // boxShadow="2px 2px 17px #cccfd950, -2px -2px 17px #ffffff50"
        boxShadow={
          theme === ThemeEnum.light
            ? '5px 5px 30px #c9d4d9, -5px -5px 30px #ffffff'
            : '5px 5px 30px #1a1a1e, -5px -5px 30px #242428'
        }
        borderRadius="10px"
        overflow="hidden"
        border="1px solid"
        borderColor={error ? 'red.800' : 'background'}
        height="5vh"
        _hover={{
          boxShadow:
            theme === ThemeEnum.light
              ? '5px 5px 30px #c9d4d9, -5px -5px 30px #ffffff'
              : '5px 5px 30px #1a1a1e, -5px -5px 30px #242428',
        }}
        _active={{
          boxShadow:
            theme === ThemeEnum.light
              ? '5px 5px 30px #c9d4d9, -5px -5px 30px #ffffff'
              : '5px 5px 30px #1a1a1e, -5px -5px 30px #242428',
        }}
        _focus={{
          boxShadow:
            theme === ThemeEnum.light
              ? '5px 5px 30px #c9d4d9, -5px -5px 30px #ffffff'
              : '5px 5px 30px #1a1a1e, -5px -5px 30px #242428',
        }}
      >
        <ChakraInput
          id={name}
          value={value}
          outline="none"
          name={name}
          border="none"
          fontSize={['3vw', '3vw', '3vw', '16px']}
          background="none"
          placeholder={placeholder}
          _active={{
            outline: 'none',
          }}
          _focus={{
            outline: 'none',
          }}
          height="100%"
          onChange={onChange}
          width="100%"
          padding="10px 20px "
        />

        <Box
          position={'absolute'}
          right={'5%'}
          top="30%"
          opacity={error ? 1 : 0}
        >
          <PiWarningCircleBold
            fontSize={['2vh']}
            color={theme === ThemeEnum.light ? '#ee6969' : '#f97c7c'}
          />
        </Box>
      </Box>
      <Text
        fontSize={['2vw', '2vw', '2vw', '16px']}
        zIndex={999}
        color="red.800"
        transform={error ? 'translateY(5px)' : 'translateY(-10px)'}
        opacity={error ? 1 : 0}
        fontWeight="regular"
      >
        {error}
      </Text>
    </>
  );
};

export default Input;
