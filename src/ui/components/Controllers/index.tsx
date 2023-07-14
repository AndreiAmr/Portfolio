import { useContext } from 'react';
import { Button, Flex, IconButton, Image } from '@chakra-ui/react';
import LightOn from '@assets/icons/light-on.png';
import LightOff from '@assets/icons/light-off.svg';
import LanguageIcon from '@assets/icons/language.png';
import ControllerButton from './ControllerButton';
import BackToTop from '../BackToTop';
import { ControllerContext } from '@/infra/contexts/Controllers.context';
import { ThemeEnum } from '@/infra/contexts/types';

const Controllers = () => {
  const {
    items: { theme },
    change: { changeTheme },
  } = useContext(ControllerContext);

  return (
    <>
      <Flex
        flexDir="column"
        position="fixed"
        bottom="20px"
        left="20px"
        gap="13px"
      >
        <ControllerButton icon={LanguageIcon} />
        <ControllerButton
          icon={theme === ThemeEnum.light ? LightOn : LightOff}
          onClick={changeTheme}
        />
      </Flex>
      <BackToTop />
    </>
  );
};

export default Controllers;
