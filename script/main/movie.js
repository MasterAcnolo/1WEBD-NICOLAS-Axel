import { fetchMovies } from "../services/fetch.js";
import { generateMovieDetails } from "../components/movieDetails.js";

document.addEventListener("DOMContentLoaded", async () => {
    const movieId = localStorage.getItem("MOVIE_ID");
    if (!movieId) {
        console.error("ID introuvable (localStorage vide)");
        return;
    }

    const movie = await fetchMovies("ID", movieId);

    console.log(movie)

    const container = document.getElementById("movie-container");
    container.innerHTML = generateMovieDetails(movie);
});
