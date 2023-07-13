import {
  Button,
  Menu as ChackraMenu,
  Image,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import MenuIcon from "@/ui/assets/icons/menu-icon.svg";

const Menu = () => {
  return (
    <ChackraMenu>
      <MenuButton
        as={Button}
        background="none"
        _active={{}}
        _focus={{}}
        _hover={{}}
        display={["inline", "none"]}
      >
        <Image src={MenuIcon} />
      </MenuButton>
      <MenuList>
        <MenuItem>Home</MenuItem>
        <MenuItem>Sobre</MenuItem>
        <MenuItem>Serviços</MenuItem>
        <MenuItem>Contato</MenuItem>
      </MenuList>
    </ChackraMenu>
  );
};

export default Menu;
