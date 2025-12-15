import { fetchMovies } from "../services/fetch.js";
import { generateMovieDetails } from "../components/movieDetails.js";
import { getLikes, getBookmarks, toggleLike, toggleBookmark } from "../helpers/storage.js";

document.addEventListener("DOMContentLoaded", async () => {
    const movieId = localStorage.getItem("MOVIE_ID");
    const movie = await fetchMovies("ID", movieId);

    if (!movieId || !movie){
        window.location.href = "search.html";
        return console.error("Can't find ID or Movie");
    }

    const container = document.getElementById("movie-container");
    container.innerHTML = generateMovieDetails(movie);

    const likeBtn = container.querySelector(".fav-btn");
    const bookBtn = container.querySelector(".bookmark-btn");

    if (likeBtn) {
        const id = parseInt(likeBtn.dataset.id, 10); // Convert Int using 10 base (security)
        const updateLikeIcon = () => {
            likeBtn.querySelector(".fav-img").src = getLikes().includes(id)
                ? "../../assets/icon/hearth-filled.png"
                : "../../assets/icon/heart.png";
        };
        updateLikeIcon();

        likeBtn.addEventListener("click", () => {
            toggleLike(id);
            updateLikeIcon();
        });
    }

    if (bookBtn) {
        const id = parseInt(bookBtn.dataset.id, 10);
        const updateBookmarkIcon = () => {
            bookBtn.querySelector(".book-img").src = getBookmarks().includes(id)
                ? "../../assets/icon/bookmark-filled.png"
                : "../../assets/icon/bookmark.png";
        };
        updateBookmarkIcon();

        bookBtn.addEventListener("click", () => {
            toggleBookmark(id);
            updateBookmarkIcon();
        });
    }

});
