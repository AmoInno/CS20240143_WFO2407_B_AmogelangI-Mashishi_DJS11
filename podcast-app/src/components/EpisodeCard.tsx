import React, { useState } from "react";
import { Podcast, Season, Episode } from "./interfaces";

interface EpisodeCardProps {
  podcast?: Podcast;
  season?: Season;
  episode?: Episode;
  onAddToFavorites: (episode: Episode) => void;
  onPlay: (episode: Episode) => void;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({
  podcast,
  season,
  episode,
  onAddToFavorites,
  onPlay,
}) => {
  const [isFav, setIsFav] = useState<boolean>(false);
  const [showFullDescription, setShowFullDescription] =
    useState<boolean>(false);

  const handlePlay = () => {
    if (episode) {
      onPlay(episode);
    }
  };

  const handleToggleFavorite = () => {
    setIsFav((prevIsFav) => !prevIsFav); // Toggle the favorite state
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const FavoriteIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={isFav ? "currentColor" : "none"}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 21.29l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.47L12 21.29z"
      />
    </svg>
  );

  if (!podcast || !season || !episode) {
    return null; // Or return a loading state or error message
  }

  return (
    <div className="bg-[var(--primaryDark)] p-6 rounded-lg shadow-xl">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <div className="sm:mr-4 text-[var(--accentColor)] ">
          <h3 className="text-2xl font-bold">{episode.title}</h3>
          <p className="text-sm ">
            {podcast.title} - {season.title}, Episode {episode.episode}
          </p>
        </div>
        <div className="flex items-center mt-4 sm:mt-0">
          <button
            onClick={() => onAddToFavorites(episode)}
            className={`flex items-center ${
              isFav
                ? "bg-red-600 font-semibold"
                : " hover:bg-[var(--accentColor)] text-white hover:text-black"
            } text-white px-4 py-2 rounded-md shadow-md transition-colors duration-300 ml-4`}
          >
            <FavoriteIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="sm:flex sm:items-start">
        <p
          className={`text-white mb-4${
            !showFullDescription ? "max-h-16 " : ""
          }`}
        >
          {episode.description}
        </p>
      </div>
    </div>
  );
};

export default EpisodeCard;
