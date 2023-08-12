import { HStack, Image } from "@chakra-ui/react";
import { Link } from 'react-router-dom'
import ColorModeSwitch from "./ColorModeSwitch";
import Download from "../assets/download.png";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Link to="/">
        <Image src={Download} objectFit="cover" boxSize="50px" borderRadius="20px" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
