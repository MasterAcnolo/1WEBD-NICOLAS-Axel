import { fetchMovies } from "../services/fetch.js";
import { bookmarkIDName, likeIDName } from "../common.js";
import { escapeHTML } from "../helpers/escapeHTML.js";

const favMovies = JSON.parse(localStorage.getItem(likeIDName)) || [];
const bookmarkMovies = JSON.parse(localStorage.getItem(bookmarkIDName)) || [];

const favContainer = document.getElementById("favorites-container");
const bookContainer = document.getElementById("bookmarks-container");

async function renderMovieList(ids, container, emptyMessage) {
    if (!container) return;

    if (ids.length === 0) {
        container.innerHTML = `<p>${escapeHTML(emptyMessage)}</p>`;
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
    card.style.opacity = "0";
    card.style.animation = "fadeIn 0.5s ease 0.25s forwards";

    const poster = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${escapeHTML(movie.poster_path)}` : "../../assets/notfound.png";
    const title = movie.title ? escapeHTML(movie.title) : "Unknown";
    const year = movie.release_date ? escapeHTML(movie.release_date.slice(0, 4)) : "?";
    card.innerHTML = `
        <img src="${poster}" alt="${movie.title}">
        <h3>${title}</h3>
        <p>${year}</p>
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
