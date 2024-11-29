import { useState, useEffect } from "react";
import { Preview } from "./interfaces";

function PodcastPreview() {
  const [preview, setPreview] = useState<Preview[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://podcast-api.netlify.app")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data! Reload and try again.");
        }
        return response.json();
      })
      .then((data) => {
        setPreview(data);
        setLoading(false); // After loading and updating the data, loading stops
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false); // Loading stops when error occurs
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ml-28">
        {preview.map((preview) => (
          <div
            key={preview.id}
            className="p-4 border rounded shadow-xl m-8 hover:scale-125 ease-in-out duration-300  "
          >
            <h3 className="text-xl font-bold pb-2.5">{preview.title}</h3>
            <img src={preview.image} alt={preview.title} />
            <p className="text-sm text-[var(--primaryDark)] mt-2">
              Seasons: {preview.seasons}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PodcastPreview;
