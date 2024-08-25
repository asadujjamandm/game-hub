import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../../hooks/usePlatform";
import Platform from "../../models/Platform";

interface Props {
  onSelectPlatform: (platform: Platform | null) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { datas, error } = usePlatforms();
  const [platform, selectPlatform] = useState<string | null>();

  const handleSelection = (platform: Platform) => {
    selectPlatform(platform.name);
    onSelectPlatform(platform);
  };

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform ? platform : "Platforms"}
      </MenuButton>
      <MenuList>
        {datas.map((item) => (
          <MenuItem key={item.id} onClick={() => handleSelection(item)}>
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
