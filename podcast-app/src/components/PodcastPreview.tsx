import FetchData from "./FetchData";
import { Podcast } from "./interfaces";
import { useState } from "react";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import PodcastCard from "./PodcastCard";

function PodcastPreview() {
  const [podcasts, setPodcast] = useState<Podcast[]>([]);

  return (
    <div className="flex-1 ml-10 md:ml-28 pt-24 px-5 justify-center">
      <div className="flex text-[var(--secondaryDark)] text-center font-bold justify-center gap-2 text-2xl">
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
  );
}

export default PodcastPreview;
