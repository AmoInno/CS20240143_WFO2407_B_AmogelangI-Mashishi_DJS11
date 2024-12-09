import { useNavigate } from "react-router-dom";
import { PodcastCardProps } from "./interfaces";
import useFavorites from "./Favourites";
import FavoriteIcon from "@mui/icons-material/Favorite";

function PodcastCard({ podcasts }: PodcastCardProps) {
  const navigate = useNavigate();
  const { addToFavorites } = useFavorites();
  return (
    <div className="flex overflow-auto gap-4">
      {podcasts.map((podcast) => (
        <div
          key={podcast.id}
          onClick={() => navigate(`/id/${podcast.id}`)}
          className="p-2 flex flex-col justify-between text-center items-center w-full h-96 max-w-xs flex-shrink-0  mt-4 rounded-lg shadow-xl hover:shadow-2xl border-2 border-[var(--primaryLight)]  hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out"
        >
          <h3 className="text-xl font-bold pb-2.5 mt-1">{podcast.title}</h3>

          <img
            src={podcast.image}
            alt={podcast.title}
            className=" h-48 object-cover rounded-md"
          />
          <p className="text-base text-[var(--primaryDark)] mt-2">
            Seasons: {podcast.seasons}
          </p>
          <button
            onClick={() => addToFavorites(podcast)}
            className="p-2 bg-red-600 text-white rounded-full mb-3"
          >
            <FavoriteIcon />
          </button>
        </div>
      ))}
    </div>
  );
}

export default PodcastCard;
