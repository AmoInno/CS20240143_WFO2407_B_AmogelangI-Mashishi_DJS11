import useFavorites from "./Favourites";

function FavoritesPage() {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <div className="flex-1 ml-10 md:ml-28 pt-24 px-5 justify-center">
      <h1 className="text-2xl font-bold mb-4">Your Favorites</h1>
      {favorites.length > 0 ? (
        <ul className="space-y-6">
          {favorites.map((podcast) => (
            <li
              key={podcast.id}
              className="p-4 rounded-lg shadow-lg flex flex-col items-center"
            >
              <h2 className="text-xl font-semibold">{podcast.title}</h2>
              <img
                src={podcast.image}
                alt={podcast.title}
                className="w-48 h-48 object-cover rounded-md my-4"
              />
              <p className="text-gray-600 mb-4">{podcast.description}</p>
              <button
                onClick={() => removeFromFavorites(podcast.id)}
                className=" mb-5 px-4 py-2 bg-[var(--secondaryLight)] text-gray-600 rounded-md hover:bg-red-600"
              >
                Remove from Favorites
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No favorites yet.</p>
      )}
    </div>
  );
}

export default FavoritesPage;
