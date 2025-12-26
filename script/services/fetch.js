const BASE_URL = "https://master-api-one.vercel.app/api/movies";

async function fetchMovies(TYPE, ARGS = "", PAGE = 1) {
  const params = new URLSearchParams({
    TYPE,
    ARGS,
    PAGE
  });

  try {
    const res = await fetch(`${BASE_URL}?${params}`);
    if (!res.ok) {
      throw new Error(`HTTP Error ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.error("fetchMovies error:", err);
    return null;
  }
}

export { fetchMovies };
