import { HStack, Image, space, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput/SearchInput";

interface Props {
  onSearch: (searchItem: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />

      <SearchInput searchItem={(searchText) => onSearch(searchText)} />

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
