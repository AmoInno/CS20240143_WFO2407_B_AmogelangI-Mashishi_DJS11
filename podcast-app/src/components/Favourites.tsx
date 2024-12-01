import { useState, useEffect } from "react";
interface Podcast {
  id: string;
  title: string;
  image: string;
  description: string;
}

function Favorites() {
  const [favorites, setFavorites] = useState<Podcast[]>(() => {
    // Load favorites from localStorage (if available)
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (podcast: Podcast) => {
    if (!favorites.find((item) => item.id === podcast.id)) {
      setFavorites([...favorites, podcast]);
    }
  };

  const removeFromFavorites = (podcastId: string) => {
    setFavorites(favorites.filter((item) => item.id !== podcastId));
  };

  return { favorites, addToFavorites, removeFromFavorites };
}
export default Favorites;
