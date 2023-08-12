import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const setPlatformId = useGameQueryStore(s => s.setPlatformId)
  const platformId = useGameQueryStore(s => s.gameQuery.platformId)
  const { data } = usePlatforms();
  const platform = data?.results.find((p) => p.id === platformId);

  return (
    <div className="mb-5">
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {platform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data?.results.map((platform) => (
            <MenuItem
              onClick={() => setPlatformId(platform.id)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default PlatformSelector;
