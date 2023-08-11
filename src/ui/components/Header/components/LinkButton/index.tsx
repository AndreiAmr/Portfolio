import { PropsWithChildren, useContext } from 'react';
import { Button, Text } from '@chakra-ui/react';
import { ControllerContext } from '@/infra/contexts/Controllers.context';
import { ThemeEnum } from '@/infra/contexts/types';

interface LinkButtonProps extends PropsWithChildren {
  onClick: () => void;
  active?: boolean;
}

const LinkButton = ({ children, onClick, active }: LinkButtonProps) => {
  const {
    items: { isAnimating, theme },
  } = useContext(ControllerContext);

  const inactiveStyle =
    theme === ThemeEnum.light
      ? '0px 0px 1px rgba(0,0,0,0.3)'
      : '0px 0px 1px rgba(255,255,255,0.3)';

  return (
    <Button onClick={onClick} bg="none">
      <Text
        fontWeight="bold"
        backgroundImage="linear-gradient(yellow.700, yellow.700)"
        backgroundRepeat="no-repeat"
        backgroundPosition={active ? '0px 0px' : '0px 40px'}
        textShadow={active ? '0px 0px 1px rgba(0,0,0,0)' : inactiveStyle}
        backgroundClip="text"
        css={{
          '-webkit-text-fill-color': 'transparent',
        }}
        transition="all .5s"
        fontSize={['1.1rem']}
        className={`${isAnimating && 'change-animate'}`}
      >
        {children}
      </Text>
    </Button>
  );
};

export default LinkButton;
