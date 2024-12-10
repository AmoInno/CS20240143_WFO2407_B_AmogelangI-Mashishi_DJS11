import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Use react-router-dom for route parameters
import EpisodeCard from "./EpisodeCard";
import { PodcastData, Episode, Season } from "./interfaces";

const PodcastInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the podcast ID from URL
  const [podcastData, setPodcastData] = useState<PodcastData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSeason, setSelectedSeason] = useState<Season | null>(null);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const [audioPlayerVisible, setAudioPlayerVisible] = useState(false);

  useEffect(() => {
    const fetchPodcastData = async () => {
      try {
        if (id) {
          const response = await fetch(
            `https://podcast-api.netlify.app/id/${id}`
          );
          const data = await response.json();

          if (data) {
            setPodcastData(data);
            setSelectedSeason(data.seasons[0]);
          } else {
            setError("Error fetching podcast data");
          }
        } else {
          setError("Invalid podcast ID");
        }
      } catch (error) {
        setError("An error occurred while fetching data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPodcastData();
  }, [id]);

  const handleEpisodePlay = (episode: Episode) => {
    setSelectedEpisode(episode);
    setAudioPlayerVisible(true);
  };

  if (isLoading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-white">Error: {error}</div>;
  }

  if (!podcastData) {
    return (
      <div className="text-white">
        Could not load podcast data. Internet connection is unstable!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--primaryLight)] text-black">
      <div className="flex flex-col lg:flex-row">
        <aside className="w-full lg:w-1/4 bg-[var(--primaryLight)] p-4 lg:min-h-screen">
          <h2 className="text-2xl font-bold mb-4 text-[var(--primaryDark)]">
            Seasons
          </h2>
          <ul className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
            {podcastData.seasons.map((season, index) => (
              <li
                key={index}
                className="mb-2 mr-2 lg:mr-0 flex-shrink-0 lg:flex-shrink"
              >
                <button
                  className={`block w-full p-3 rounded transition-colors duration-300 whitespace-nowrap lg:whitespace-normal ${
                    season === selectedSeason
                      ? "bg-[var(--secondaryLight)] font-semibold"
                      : "bg-[var(--primaryDark)] hover:bg-[var(--accentColor)] text-white hover:text-black"
                  }`}
                  onClick={() => setSelectedSeason(season)}
                >
                  {season.title} ({season.episodes.length})
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <main className="flex-1 p-4">
          <div className="flex flex-col sm:flex-row items-center mb-8">
            <div>
              <div className="flex flex-col gap-4 items-center">
                <h1 className="text-2xl md:text-4xl font-bold mb-2 text-center sm:text-left text-[var(--primaryDark)]">
                  {podcastData.title}
                </h1>
                <img
                  src={podcastData.seasons[0].image}
                  alt="Podcast Cover"
                  className="w-60 h-60 mb-4 sm:mb-0 sm:mr-8 rounded-lg shadow-2xl"
                />
              </div>
              <p className="text-[var(--primaryDark)] text-center sm:text-left pt-6">
                {podcastData.description}
              </p>
            </div>
          </div>

          {selectedSeason && (
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[var(--primaryDark)]">
                {selectedSeason.title} ({selectedSeason.episodes.length}{" "}
                episodes)
              </h2>
              <div className="grid gap-6">
                {selectedSeason.episodes.map((episode, index) => (
                  <EpisodeCard
                    key={`${selectedSeason.season}-${index}`}
                    podcast={podcastData}
                    season={selectedSeason}
                    episode={episode}
                    onPlay={handleEpisodePlay}
                  />
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default PodcastInfo;
