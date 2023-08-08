import { useContext } from 'react';
import { ControllerContext } from '@/infra/contexts/Controllers.context';
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
  const {
    items: { isAnimating },
  } = useContext(ControllerContext);

  return (
    <ChakraButton
      onClick={onClick}
      // width="125px"
      // height={'40px'}
      // height="3.5vh"
      padding="1.8vh"
      borderRadius="40px"
      background={bgColor}
      boxShadow={!noShadow ? `0px 4px 4px 0px rgba(0, 0, 0, 0.25) ` : 'none'}
      _hover={{
        boxShadow: `0px 4px 4px 0px rgba(0, 0, 0, 0.40)`,
      }}
      _active={{
        boxShadow: `0px -4px 4px 0px rgba(0, 0, 0, 0.40) inset`,
      }}
      _focus={{}}
      color={labelColor}
      fontWeight="medium"
      fontSize={'1.5vh'}
      zIndex={99}
      clipPath="react(auto, auto, auto, auto)"
      className={`${isAnimating && 'change-animate'}`}
      overflow="hidden"
    >
      {label}
    </ChakraButton>
  );
};

export default Button;
