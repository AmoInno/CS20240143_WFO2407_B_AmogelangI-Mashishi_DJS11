import { useState } from "react";
import SortIcon from "@mui/icons-material/Sort";

interface SortOption {
  sort: (option: string) => void; // Replace `string` with the actual type of `sort`
}

function Filter({ sort }: SortOption) {
  const [selectFilter, setSelectFilter] = useState(""); // keeps track of which filter method is selected

  // Function get triggered when something(option of filtering method) in the dropdown menu changes

  const handleSortChange = (event: { target: { value: any } }) => {
    const option = event.target.value;
    setSelectFilter(option); // stores the (current)selected filter option

    if (sort) {
      sort(option); // Calls the sort function with the (current)selected filter option
    }
  };

  return (
    <div>
      <label htmlFor="sort-filter">
        Sort
        <SortIcon />
      </label>
      <select
        name="sort-filter"
        id="sort-filter"
        value={selectFilter}
        onChange={handleSortChange}
      >
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  );
}

export default Filter;
