import { useState } from "react";
import SortIcon from "@mui/icons-material/Sort";

interface SortOption {
  sort: (option: "A-Z" | "Z-A" | "newest" | "oldest") => void;
  selectedFilter: "A-Z" | "Z-A" | "newest" | "oldest";
}

function Filter({ sort }: SortOption) {
  const [selectFilter, setSelectFilter] = useState("A-Z"); // keeps track of which filter method is selected, Default filter method is set to "A-Z"

  // Function get triggered when something(option of filtering method) in the dropdown menu changes

  const handleSortChange = (event: { target: { value: any } }) => {
    const option = event.target.value;
    setSelectFilter(option); // stores the (current)selected filter option

    if (sort) {
      sort(option); // Calls the sort function with the (current)selected filter option
    }
  };

  return (
    <div className="flex items-center gap-2 bg-[var(--primaryLight)] p-1.5 rounded-lg w-fit">
      <label
        htmlFor="sort-filter"
        className="flex items-center gap-0.5 text-lg font-semibold"
      >
        <SortIcon />
        Sort
      </label>
      <select
        name="sort-filter"
        id="sort-filter"
        value={selectFilter}
        onChange={handleSortChange}
        className=" mb-1 mt-2 px-3 py-2  rounded-lg text-sm  bg-[var(--hoverColor)] text-[var(--primaryDark)] focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 transition ease-in-out delay-300  hover:bg-zinc-50 hover:border-black"
      >
        <option value="A-Z">Title: A-Z</option>
        <option value="Z-A">Title: Z-A</option>
        <option value="newest">Podcast: Newest</option>
        <option value="oldest">Podcast: Oldest</option>
      </select>
    </div>
  );
}

export default Filter;
