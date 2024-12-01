import { useNavigate } from "react-router-dom";
import { PodcastCardProps } from "./interfaces";
import useFavorites from "./Favourites";

function PodcastCard({ podcasts }: PodcastCardProps) {
  const navigate = useNavigate();
  const { addToFavorites } = useFavorites();
  return (
    <div className="flex overflow-auto">
      {podcasts.map((podcast) => (
        <div
          key={podcast.id}
          onClick={() => navigate(`/id/${podcast.id}`)}
          className="flex-grow-0 w-full h-80 max-w-xs flex-shrink-0 p-4 rounded-lg shadow-xl hover:shadow-2xl border-2 border-[var(--primaryLight)] m-4  hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out"
        >
          <h3 className="text-xl font-bold pb-2.5">{podcast.title}</h3>
          <button
            onClick={() => addToFavorites(podcast)}
            className=" mb-5 px-4 py-2 bg-[var(--secondaryDark)] text-white rounded-md"
          >
            Add to Favorites
          </button>
          <img
            src={podcast.image}
            alt={podcast.title}
            className=" w-full h-48 object-cover rounded-md"
          />
          <p className="text-sm text-[var(--primaryDark)] mt-2">
            Seasons: {podcast.seasons}
          </p>
        </div>
      ))}
    </div>
  );
}

export default PodcastCard;
