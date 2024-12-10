import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import PodcastPreview from "./PodcastPreview";
import DisplayPodcast from "./DisplayPodcast";
import { Routes, Route } from "react-router-dom";
import DisplayGenre from "./DisplayGenre";
import FavoritesPage from "./FavoritesPage";
import Filter from "./Filter";
import { useState } from "react";
import { sortPodcasts } from "./FilterFunction";

interface FilteringPodcasts {
  id: string;
  title: string;
  updated: string; // Use ISO string format for dates
  genre: string;
}

export type SortOption = "A-Z" | "Z-A" | "newest" | "oldest";

function App() {
  const [sortOption, setSortOption] = useState<SortOption>("A-Z");
  const [podcasts, setPodcasts] = useState<FilteringPodcasts[]>([]); // Store the podcasts
  const handleSortChange = (option: SortOption) => {
    setSortOption(option); // Updates the selected sorting method
  };
  const sortedPodcasts = sortPodcasts(podcasts, sortOption); // Sort the podcasts when the sort option changes

  return (
    <div className="bg-gradient-to-r from-[#fffeeb] to-[#dba11a] w-full">
      <Navbar />
      <Sidebar />

      <div className="pt-24 pl-[90px] md:pl-[125px] lg:pl-[130px]">
        <Routes>
          <Route
            path="/"
            element={
              <PodcastPreview
                sortOption={sortOption}
                handleSortChange={handleSortChange}
              />
            }
          />
          <Route path="/id/:id" element={<DisplayPodcast />} />
          <Route
            path="/genre/:genreId"
            element={
              <DisplayGenre
                sortOption={sortOption}
                handleSortChange={handleSortChange}
              />
            }
          />
          <Route path="/favourites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
