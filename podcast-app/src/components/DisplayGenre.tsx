import FetchData from "./FetchData";
import { useState, useMemo } from "react";
import { Podcast } from "./interfaces";
import PodcastCard from "./PodcastCard";
import Filter from "./Filter";
import { SortOption } from "./App";
import { sortPodcasts } from "./FilterFunction";

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

interface DisplayGenreProps {
  sortOption: SortOption;
  handleSortChange: (option: SortOption) => void;
}

function DisplayGenre({ sortOption, handleSortChange }: DisplayGenreProps) {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [selectGenre, setSelectGenre] = useState<number | null>(null);

  // Group podcasts by genre
  const groupedPodcasts = useMemo(() => {
    const grouped = podcasts.reduce<Record<number, Podcast[]>>(
      (acc, podcast) => {
        podcast.genres.forEach((genreId) => {
          if (!acc[genreId]) {
            acc[genreId] = []; // if genre doesn't exist,create an empty array for that genre
          }
          acc[genreId].push(podcast); // if it exists, add the podcast to the existing array for that genre
        });
        return acc;
      },
      {}
    );

    // Sort podcasts in each genre
    Object.keys(grouped).forEach((genreId) => {
      grouped[Number(genreId)] = sortPodcasts(
        grouped[Number(genreId)],
        sortOption
      );
    });

    return grouped;
  }, [podcasts, sortOption]);

  return (
    <div className="flex-1 px-5 justify-center">
      <FetchData
        endpoint="https://podcast-api.netlify.app"
        onDataFetched={setPodcasts}
      />
      <div className="flex justify-end items-center pt-5">
        <Filter sort={handleSortChange} selectedFilter={sortOption} />
      </div>
      <div>
        {selectGenre !== null ? (
          <>
            <h2>Genre: {genreTitles[selectGenre]}</h2>
            <ul>
              {(groupedPodcasts[selectGenre] || []).map((podcast) => (
                <li key={podcast.id}>
                  <img
                    src={podcast.image}
                    alt={podcast.title}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <h3 className="text-xl font-bold pb-2.5">{podcast.title}</h3>
                </li>
              ))}
            </ul>
          </>
        ) : (
          // Display all genres with their podcasts
          Object.entries(groupedPodcasts).map(([genreId, genrePodcasts]) => (
            <div key={genreId}>
              <h2 className="text-3xl font-bold p-2">
                {genreTitles[Number(genreId)]}
              </h2>
              <div className="mb-5">
                <PodcastCard podcasts={genrePodcasts} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default DisplayGenre;
