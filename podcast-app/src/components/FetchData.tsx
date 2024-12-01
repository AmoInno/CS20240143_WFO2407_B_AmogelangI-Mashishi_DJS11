import { useState, useEffect } from "react";

function FetchData({
  endpoint,
  onDataFetched,
}: {
  endpoint: string;
  onDataFetched: (data: any) => void;
}) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        onDataFetched(data); // Pass data to components
        setLoading(false); // After loading and updating the data, loading stops
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false); // Loading stops when error occurs
      });
  }, [onDataFetched, endpoint]);

  if (loading)
    return <p className="text-gray-900 font-bold">STATUS: Loading...</p>;

  if (error) return <p className="text-gray-900 font-bold">STATUS: {error}</p>;

  return null; // No rendering because it only fetches the data and doesn't display it
}

export default FetchData;
