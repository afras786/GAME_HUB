import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom"
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const navigation = useNavigate()
  const setSearchText = useGameQueryStore(s => s.setSearchText)
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (inputRef.current !== null) {
          setSearchText(inputRef.current.value)
          navigation("/")
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={inputRef}
          borderRadius={20}
          placeholder="Serch games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
