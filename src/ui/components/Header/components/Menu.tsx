import {
  Menu as ChackraMenu,
  Flex,
  Image,
  MenuButton,
  MenuItem,
  Button,
  MenuList,
} from '@chakra-ui/react';
import MenuIcon from '@/ui/assets/icons/menu-icon.svg';
import LinkButton from './LinkButton';
import useMenu, { ActiveOptionEnum } from '../hooks/useMenu';

const Menu = () => {
  const {
    items: { activeOption },
    handlers: {
      handleGoToAbout,
      handleGoToContact,
      handleGoToHome,
      handleGoToServices,
      handleGoToSkills,
    },
  } = useMenu();

  // const checkActiveOption = useCallback(() => {

  // }, [window.scrollY]);

  return (
    <>
      <Flex display={['initial', 'initial', 'none']}>
        <ChackraMenu>
          <MenuButton
            as={Button}
            background="none"
            _active={{}}
            _focus={{}}
            _hover={{}}
            display={['inline']}
            outline="none"
          >
            <Image src={MenuIcon} />
          </MenuButton>
          <MenuList transition="all 0.1s">
            <MenuItem>Home</MenuItem>
            <MenuItem>Sobre</MenuItem>
            <MenuItem>Serviços</MenuItem>
            <MenuItem>Contato</MenuItem>
          </MenuList>
        </ChackraMenu>
      </Flex>
      <Flex display={['none', 'none', 'initial']}>
        <LinkButton
          onClick={handleGoToHome}
          active={activeOption === ActiveOptionEnum.home}
        >
          Home
        </LinkButton>
        <LinkButton
          onClick={handleGoToAbout}
          active={activeOption === ActiveOptionEnum.about}
        >
          Sobre
        </LinkButton>
        <LinkButton
          onClick={handleGoToSkills}
          active={activeOption === ActiveOptionEnum.skills}
        >
          Skills
        </LinkButton>
        <LinkButton
          onClick={handleGoToServices}
          active={activeOption === ActiveOptionEnum.services}
        >
          Serviços
        </LinkButton>
        <LinkButton
          onClick={handleGoToContact}
          active={activeOption === ActiveOptionEnum.contact}
        >
          Contato
        </LinkButton>
      </Flex>
    </>
  );
};

export default Menu;
