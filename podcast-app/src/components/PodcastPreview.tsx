import FetchData from "./FetchData";
import { Podcast } from "./interfaces";
import { useState } from "react";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import PodcastCard from "./PodcastCard";
import GenreList from "./GenreList";
import { sortPodcasts } from "./FilterFunction";
import { SortOption } from "./App";
import { useEffect } from "react";
import Filter from "./Filter";

function PodcastPreview() {
  const [podcasts, setPodcast] = useState<Podcast[]>([]);
  const [sortedPodcasts, setSortedPodcasts] = useState<Podcast[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>("A-Z");

  const genreTitles: Record<number, string> = {
    1: "Personal Growth",
    2: "Investigative Journalism",
    3: "History",
    4: "Comedy",
    5: "Entertainment",
    6: "Business",
    7: "Fiction",
    8: "News",
    9: "Kids and Family",
  };

  useEffect(() => {
    setSortedPodcasts(sortPodcasts(podcasts, sortOption));
  }, [podcasts, sortOption]);

  const handleSortChange = (option: SortOption) => {
    setSortOption(option); // Update the sort option
  };

  return (
    <div>
      <div className="">
        <GenreList genres={genreTitles} />
      </div>
      <div className="flex-1 pt-12 justify-center">
        <FetchData
          endpoint="https://podcast-api.netlify.app/"
          onDataFetched={setPodcast}
        />
        <div className="flex justify-between items-center mr-12">
          <div className="flex text-[var(--secondaryDark)] text-center font-bold gap-2 text-2xl">
            <h1 className="text-2xl md:text-3xl">Available Podcasts</h1>
            <div>
              <PodcastsIcon />
            </div>
          </div>
          {/* Pass handleSortChange to the Filter component */}
          <Filter sort={handleSortChange} selectedFilter={sortOption} />
        </div>

        <div>
          <PodcastCard podcasts={sortedPodcasts} />
        </div>
      </div>
    </div>
  );
}

export default PodcastPreview;
