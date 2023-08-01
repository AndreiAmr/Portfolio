import { PropsWithChildren } from 'react';
import { Button, Text } from '@chakra-ui/react';

interface LinkButtonProps extends PropsWithChildren {
  onClick: () => void;
  active?: boolean;
}

const LinkButton = ({ children, onClick, active }: LinkButtonProps) => {
  return (
    <Button onClick={onClick} bg="none">
      <Text
        fontWeight="bold"
        backgroundImage="linear-gradient(yellow.700, yellow.700)"
        backgroundRepeat="no-repeat"
        backgroundPosition={active ? '0px 0px' : '0px 40px'}
        textShadow={
          active ? '0px 0px 1px rgba(0,0,0,0)' : '0px 0px 1px rgba(0,0,0,0.3)'
        }
        backgroundClip="text"
        css={{
          '-webkit-text-fill-color': 'transparent',
        }}
        transition="all .5s"
        fontSize={['1.1rem']}
      >
        {children}
      </Text>
    </Button>
  );
};

export default LinkButton;
