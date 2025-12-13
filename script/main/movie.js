import { fetchMovies } from "../services/fetch.js";
import { generateMovieDetails } from "../components/movieDetails.js";
import { bookmarkIDName, likeIDName } from "../common.js";

document.addEventListener("DOMContentLoaded", async () => {
    const movieId = localStorage.getItem("MOVIE_ID");
    if (!movieId){
        window.location.href = "search.html";
        return console.error("Can't find ID");
    }

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
    likeBtn.querySelector(".fav-img").src = JSON.parse(localStorage.getItem(likeIDName) || "[]").includes(id)
        ? "../../assets/icon/hearth-filled.png"
        : "../../assets/icon/heart.png";

    likeBtn.addEventListener("click", () => {
        const active = toggleLocalStorage(likeIDName, id);
        likeBtn.querySelector(".fav-img").src = active
            ? "../../assets/icon/hearth-filled.png"
            : "../../assets/icon/heart.png";
    });
    }

    if (bookBtn) {
        const id = parseInt(bookBtn.dataset.id, 10);
        bookBtn.querySelector(".book-img").src = JSON.parse(localStorage.getItem(bookmarkIDName) || "[]").includes(id)
            ? "../../assets/icon/bookmark-filled.png"
            : "../../assets/icon/bookmark.png";

        bookBtn.addEventListener("click", () => {
            const active = toggleLocalStorage(bookmarkIDName, id);
            bookBtn.querySelector(".book-img").src = active
                ? "../../assets/icon/bookmark-filled.png"
                : "../../assets/icon/bookmark.png";
        });
    }

});
