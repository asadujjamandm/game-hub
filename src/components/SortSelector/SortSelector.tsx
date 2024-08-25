import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectSort: (sortBy: string) => void;
}

const SortSelector = ({ selectSort }: Props) => {
  const [sortBy, setSortBy] = useState<string>("");
  const sort_list = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort By: {sortBy}
      </MenuButton>

      <MenuList>
        {sort_list.map((item) => (
          <MenuItem
            key={item.value}
            onClick={() => {
              setSortBy(item.label);
              selectSort(item.value);
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
