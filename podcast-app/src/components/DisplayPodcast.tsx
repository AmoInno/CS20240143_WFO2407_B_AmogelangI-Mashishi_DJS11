import { useParams } from "react-router-dom";
import FetchData from "./FetchData";
import { useState } from "react";
function DisplayPodcast() {
  const { id } = useParams(); // Get the podcast ID from the URL
  const [podcastData, setPodcastData] = useState<any>(null);
  const handleDataFeteched = (data: any) => {
    setPodcastData(data); // recieves data from Fetch Data component
  };

  return (
    <div className="flex-1 px-5 justify-center">
      <FetchData
        endpoint={`https://podcast-api.netlify.app/id/${id}`}
        onDataFetched={handleDataFeteched}
      />
      {podcastData ? (
        <div>
          <h1 className="text-5xl font-bold p-5 text-center mb-8 text-[var(--secondaryDark)]">
            {podcastData.title || "No title available"}
          </h1>
          <div className="flex justify-center">
            <img
              src={podcastData.image || "default-image.jpg"}
              alt={podcastData.title || "Podcast image"}
              className="w-6/12  rounded-md mb-8"
            />
          </div>
          <div className="mb-5">
            <p className="mb-5">
              Updated: {podcastData.updated || "Not available"}
            </p>
            <p>
              Description:{" "}
              {podcastData.description || "No description available"}
            </p>
          </div>
          {Array.isArray(podcastData.seasons) ? (
            <div>
              <h2 className="font-bold">Seasons:</h2>
              {podcastData.seasons.map((season: any, index: number) => (
                <div key={index}>
                  <h3 className="bg-[var(--primaryDark)] text-white p-3 w-fit rounded-lg mt-5 mb-2">
                    Season {index + 1}
                  </h3>
                  <p>
                    {season.description ||
                      "No description available for this season"}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p>Seasons: {podcastData.seasons || "Not available"}</p>
          )}
        </div>
      ) : (
        <p>Loading podcast information...</p>
      )}
    </div>
  );
}

export default DisplayPodcast;
