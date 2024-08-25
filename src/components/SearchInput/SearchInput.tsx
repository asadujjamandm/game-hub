import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  searchItem: (searchText: string) => void;
}

const SearchInput = ({ searchItem }: Props) => {
  // const [searchText, setSearchText] = useState("");

  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          searchItem(ref.current.value as string);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};
export default SearchInput;
