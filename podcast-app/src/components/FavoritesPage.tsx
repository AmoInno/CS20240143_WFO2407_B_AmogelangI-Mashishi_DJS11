import useFavorites from "./Favourites";
import { SortOption } from "./App";
import { useState, useEffect } from "react";
import { sortPodcasts } from "./FilterFunction";
import Filter from "./Filter";

function FavoritesPage() {
  const { favorites, removeFromFavorites } = useFavorites();
  const [sortOption, setSortOption] = useState<SortOption>("A-Z"); // Keep track of selected sorting state; Default is set to "A-Z"
  const [sortedFavorites, setSortedFavorites] = useState(favorites);

  // Re-sorts the favorites list whenever favorites or sortOption changes
  useEffect(() => {
    setSortedFavorites(sortPodcasts(favorites, sortOption));
  }, [favorites, sortOption]);

  const handleSortChange = (option: SortOption) => {
    setSortOption(option); // Update the sort option
  };

  return (
    <div className="flex-1 mr-4 p-6 justify-center">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
          Your Favorites
        </h1>
        <Filter sort={handleSortChange} selectedFilter={sortOption} />
      </div>
      {sortedFavorites.length > 0 ? (
        <ul className="space-y-6">
          {sortedFavorites.map((podcast) => (
            <li
              key={podcast.id}
              className="p-8 rounded-lg shadow-lg flex flex-col bg-[var(--primaryLight)] hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl md:text-2xl font-semibold">
                  {podcast.title}
                </h2>
                <button
                  onClick={() => removeFromFavorites(podcast.id)}
                  className="px-4 py-2 bg-[var(--secondaryLight)] text-gray-600 rounded-md hover:bg-red-600"
                >
                  Remove from Favorites
                </button>
              </div>
              <img
                src={podcast.image}
                alt={podcast.title}
                className="m-10 w-full max-w-xs h-auto object-cover rounded-md self-center"
              />
              <p className="text-gray-600 mb-4">{podcast.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center text-lg">No favorites yet.</p>
      )}
    </div>
  );
}

export default FavoritesPage;
