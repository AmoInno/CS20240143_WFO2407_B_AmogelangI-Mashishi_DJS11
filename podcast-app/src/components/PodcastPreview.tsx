import FetchData from "./FetchData";
import { Podcast } from "./interfaces";
import { useState } from "react";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import PodcastCard from "./PodcastCard";
import GenreList from "./GenreList";

function PodcastPreview() {
  const [podcasts, setPodcast] = useState<Podcast[]>([]);

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

  return (
    <div>
      <div className="">
        <GenreList genres={genreTitles} />
      </div>
      <div className="flex-1 pt-12 justify-center">
        <div className="flex text-[var(--secondaryDark)] text-center font-bold gap-2 text-2xl">
          <h1 className="text-2xl md:text-3xl">Available Podcasts</h1>
          <div>
            <PodcastsIcon />
          </div>
        </div>

        <FetchData
          endpoint="https://podcast-api.netlify.app/"
          onDataFetched={setPodcast}
        />
        <div>
          <PodcastCard podcasts={podcasts} />
        </div>
      </div>
    </div>
  );
}

export default PodcastPreview;
