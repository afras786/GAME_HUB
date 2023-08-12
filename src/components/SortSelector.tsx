import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-name", label: "Name" },
    { value: "-released", label: "Released" },
    { value: "-added", label: "Added" },
    { value: "-created", label: "Created" },
    { value: "-updated", label: "Updated" },
    { value: "-rating", label: "Rating" },
    { value: "-metacritic", label: "Meta Critic" },
  ];
  const setSortOrder = useGameQueryStore(s => s.setSortOrder)
  const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder)
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            onClick={() => setSortOrder(sortOrder.value)}
            value={sortOrder.value}
            key={sortOrder.value}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;