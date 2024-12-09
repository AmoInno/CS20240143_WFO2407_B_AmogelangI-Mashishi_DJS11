import { useState } from "react";
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
      <label htmlFor="sort-filter">Filter</label>
      <select
        name="sort-filter"
        id="sort-filter"
        value={selectFilter}
        onChange={handleSortChange}
      >
        <option value=""></option>
        <option value="A-Z"></option>
        <option value="Z-A"></option>
        <option value="newest"></option>
        <option value="oldest"></option>
      </select>
    </div>
  );
}

export default Filter;
