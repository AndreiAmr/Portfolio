import { useContext } from 'react';
import { Flex, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import LightOn from '@assets/icons/light-on.png';
import LightOff from '@assets/icons/light-off.svg';
import LanguageIcon from '@assets/icons/language.png';
import ControllerButton from './ControllerButton';
import BackToTop from '../BackToTop';
import { ControllerContext } from '@/infra/contexts/Controllers.context';
import { LanguageEnum, ThemeEnum } from '@/infra/contexts/types';

const Controllers = () => {
  const {
    items: { theme },
    change: { changeTheme, handleSwitchLanguage },
  } = useContext(ControllerContext);

  return (
    <>
      <Flex
        flexDir="column"
        position="fixed"
        bottom="20px"
        left="20px"
        gap="13px"
        zIndex={9}
      >
        <Menu placement="right">
          <MenuButton>
            <ControllerButton icon={LanguageIcon} />
          </MenuButton>
          <MenuList background="background">
            <MenuItem
              onClick={() => handleSwitchLanguage(LanguageEnum.portugues)}
              color="gray.500"
              background="background"
              borderBottom="1px solid #efefef30"
            >
              Português BR
            </MenuItem>
            <MenuItem
              onClick={() => handleSwitchLanguage(LanguageEnum.english)}
              color="gray.500"
              background="background"
            >
              English US
            </MenuItem>
          </MenuList>
        </Menu>
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
