import axios from "axios";

export async function fetchData(query, page, setPhotos, setLoading, setError) {
  try {
    setLoading(true);
    const response = await axios.get(
      `https://api.unsplash.com/search/photos/`,
      {
        params: {
          client_id: "4X8cwTC_WByeQDqZdhlkCZNIiaqB1c-QZrSrtRQoR0o",
          query: query,
          per_page: 12,
          page: page,
          orientation: "landscape",
        },
      }
    );
    setPhotos((prevPhotos) => [...prevPhotos, ...response.data.results]);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
}
