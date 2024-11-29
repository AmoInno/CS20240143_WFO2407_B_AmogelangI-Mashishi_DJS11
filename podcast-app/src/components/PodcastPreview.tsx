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
        setLoading(false);
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
      <div>
        {preview.map((preview) => (
          <div key={preview.id}>
            <h3>{preview.title}</h3>
            <img src={preview.image} alt={preview.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PodcastPreview;
