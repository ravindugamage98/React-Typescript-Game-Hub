import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../zustand/gameStore";

// ! Use Zustand to avoid prop drilling
// interface Props {
//   selectedPlatformID?: number;
//   onSelectPlatform: (platform: Platform) => void;
// }

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const setSelectedPlatform = useGameQueryStore((s) => s.setPlatformID);
  const selectedPlatformID = useGameQueryStore((s) => s.gameQuery.platformID);
  const selectedPlatform = usePlatform(selectedPlatformID);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setSelectedPlatform(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
