import { useContext } from 'react';
import { ControllerContext } from '@/infra/contexts/Controllers.context';
import { Box, Text, Textarea } from '@chakra-ui/react';
import { ThemeEnum } from '@/infra/contexts/types';
import { PiWarningCircleBold } from 'react-icons/pi';

interface TextAreaProps {
  value: string;
  error?: string;
  onChange: (prop: any) => void;
  name: string;
}

export const TextArea = ({ value, error, onChange, name }: TextAreaProps) => {
  const {
    items: { theme },
  } = useContext(ControllerContext);

  return (
    <Box
      width="80vw"
      maxWidth="500px"
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
      // position="relative"
      _hover={{
        boxShadow:
          theme === ThemeEnum.light
            ? '10px 10px 30px #c9d4d9, -10px -10px 30px #ffffff'
            : '10px 10px 30px #1a1a1e, -10px -10px 30px #242428',
      }}
      _active={{
        boxShadow:
          theme === ThemeEnum.light
            ? '10px 10px 30px #c9d4d9, -10px -10px 30px #ffffff'
            : '10px 10px 30px #1a1a1e, -10px -10px 30px #242428',
      }}
      _focus={{
        boxShadow:
          theme === ThemeEnum.light
            ? '10px 10px 30px #c9d4d9, -10px -10px 30px #ffffff'
            : '10px 10px 30px #1a1a1e, -10px -10px 30px #242428',
      }}
      height="200px"
      transition="all 0.4s !important"
    >
      <Textarea
        name={name}
        placeholder="Mensagem"
        resize="none"
        outline="none"
        border="none"
        autoComplete="none"
        fontSize={['3.2vw', '3.2vw', '3.2vw', '16px']}
        height="100% !important"
        padding="20px"
        transition="all 0.4s !important"
        transitionDelay="0s"
        value={value}
        onChange={onChange}
      />
      <Box position={'absolute'} right={'5%'} top="10%" opacity={error ? 1 : 0}>
        <PiWarningCircleBold
          fontSize={['2vh']}
          color={theme === ThemeEnum.light ? '#ee6969' : '#f97c7c'}
        />
      </Box>
      <Text
        fontSize={['2vw', '2vw', '2vw', '16px']}
        position="absolute"
        zIndex={999}
        color="red.800"
        bottom="-30px"
        transform={error ? 'translateY(0px)' : 'translateY(-10px)'}
        opacity={error ? 1 : 0}
        fontWeight="regular"
      >
        {error}
      </Text>
    </Box>
  );
};

export default TextArea;
