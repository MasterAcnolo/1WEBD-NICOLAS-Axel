import { fetchMovies } from "../services/fetch.js";

const favMovies = JSON.parse(localStorage.getItem("LIKES")) || [];
const bookmarkMovies = JSON.parse(localStorage.getItem("BOOKMARKS")) || [];

const favContainer = document.getElementById("favorites-container");
const bookContainer = document.getElementById("bookmarks-container");

async function renderMovieList(ids, container, emptyMessage) {
    if (!container) return;

    if (ids.length === 0) {
        container.innerHTML = `<p>${emptyMessage}</p>`;
        return;
    }

    for (const id of ids) {
        const movie = await fetchMovies("ID", id);
        container.appendChild(createMovieCard(movie));
    }
}

function createMovieCard(movie) {
    const card = document.createElement("a");
    card.href = "movie.html";
    card.className = "movie-card";
    card.id = `movie-${movie.id}`;

    card.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
        <h3>${movie.title}</h3>
        <p>${movie.release_date?.slice(0, 4) || "?"}</p>
    `;

    return card;
}

document.addEventListener("click", (event) => {
    const card = event.target.closest(".movie-card");
    if (!card) return;

    event.preventDefault();
    localStorage.setItem("MOVIE_ID", card.id.replace("movie-", ""));
    window.location.href = "movie.html";
});

renderMovieList(favMovies, favContainer, "No Favorites Movies Yet.");
renderMovieList(bookmarkMovies, bookContainer, "No Bookmarked Movies Yet.");
