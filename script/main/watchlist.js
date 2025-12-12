import { fetchMovies } from "../services/fetch.js";

const favMovies = JSON.parse(localStorage.getItem("LIKES")) || [];
const bookmarkMovies = JSON.parse(localStorage.getItem("BOOKMARKS")) || [];

const favContainer = document.getElementById("favorites-container");
const bookContainer = document.getElementById("bookmarks-container");


async function renderFavorites() {
    if (favMovies.length === 0) {
        favContainer.innerHTML = "<p>No Favorites Movies Yet.</p>";
        return;
    }

    for (const id of favMovies) {
        const movie = await fetchMovies("ID", id);

        const card = document.createElement("a");
        card.href = "movie.html";
        card.className = "movie-card";
        card.id = `movie-${movie.id}`;

        card.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
            <h3>${movie.title}</h3>
            <p>${movie.release_date?.slice(0, 4) || "?"}</p>
        `;

        favContainer.appendChild(card);
    }
}


async function renderBookmark() {
    if (bookmarkMovies.length === 0) {
        bookContainer.innerHTML = "<p>No Bookmarked Movies Yet.</p>";
        return;
    }

    for (const id of bookmarkMovies) {
        const movie = await fetchMovies("ID", id);

        const card = document.createElement("a");
        card.href = "movie.html";
        card.className = "movie-card";
        card.id = `movie-${movie.id}`;

        card.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
            <h3>${movie.title}</h3>
            <p>${movie.release_date?.slice(0, 4) || "?"}</p>
        `;

        bookContainer.appendChild(card);
    }
}


document.addEventListener("click", (event) => {
    const card = event.target.closest(".movie-card");
    if (!card) return;

    event.preventDefault();

    const movieId = card.id.split("movie-")[1];
    localStorage.setItem("MOVIE_ID", movieId);

    window.location.href = "movie.html";
});

renderFavorites();
renderBookmark();