import { fetchMovies } from "../services/fetch.js";
import { generateMovieDetails } from "../components/movieDetails.js";

document.addEventListener("DOMContentLoaded", async () => {
    const movieId = localStorage.getItem("MOVIE_ID");
    if (!movieId) return console.error("ID introuvable");

    const movie = await fetchMovies("ID", movieId);
    const container = document.getElementById("movie-container");
    container.innerHTML = generateMovieDetails(movie);

    const likeBtn = container.querySelector(".fav-btn");
    const bookBtn = container.querySelector(".bookmark-btn");

    const toggleLocalStorage = (key, id) => {
        let items = JSON.parse(localStorage.getItem(key) || "[]");
        if (items.includes(id)) {
            items = items.filter(i => i !== id); // remove
        } else {
            items.push(id); // add
        }
        localStorage.setItem(key, JSON.stringify(items));
        return items.includes(id);
    };

    if (likeBtn) {
        const id = parseInt(likeBtn.dataset.id, 10);
        likeBtn.querySelector(".fav-img").src = JSON.parse(localStorage.getItem("likes") || []).includes(id)
            ? "../../assets/icon/hearth-filled.png"
            : "../../assets/icon/heart.png";

        likeBtn.addEventListener("click", () => {
            const active = toggleLocalStorage("likes", id);
            likeBtn.querySelector(".fav-img").src = active
                ? "../../assets/icon/hearth-filled.png"
                : "../../assets/icon/heart.png";
        });
    }

    if (bookBtn) {
        const id = parseInt(bookBtn.dataset.id, 10);
        bookBtn.querySelector(".book-img").src = JSON.parse(localStorage.getItem("bookmarks") || []).includes(id)
            ? "../../assets/icon/bookmark-filled.png"
            : "../../assets/icon/bookmark.png";

        bookBtn.addEventListener("click", () => {
            const active = toggleLocalStorage("bookmarks", id);
            bookBtn.querySelector(".book-img").src = active
                ? "../../assets/icon/bookmark-filled.png"
                : "../../assets/icon/bookmark.png";
        });
    }
});
