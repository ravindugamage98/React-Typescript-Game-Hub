import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

// ! Use Zustand to avoid prop drilling
// interface Props {
//   onSearch: (searchText: string) => void;
// }

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <SearchInput
      // ! Use Zustand to avoid prop drilling
      // onSearch={onSearch}
      />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
