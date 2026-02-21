import {getColor} from "../helpers/color.js"
import { escapeHTML } from "../helpers/escapeHTML.js";

function generateMovieCard(data, limit, aos = true) {
    let htmlContent = "";

    if (!data || !data.results || data.results.length === 0) {
        return "<p>No movies found.</p>";
    }
    
    const tableauDeFilms = data.results;

    for (let i = 0; i < limit; i++) {
        
        // Security: If we ask for 10 movies but there are only 3, we stop the loop
        if (i >= tableauDeFilms.length) {
            break; 
        }

        const film = tableauDeFilms[i];
        const altText = film.title ? escapeHTML(film.title) : "Movie not found";

        let image = film.poster_path ? `https://image.tmdb.org/t/p/w500/${escapeHTML(film.poster_path)}` : "../../assets/notfound.png";
        if (!image || image === "N/A") {
            image = "https://masteracnolo.github.io/1WEBD-NICOLAS-Axel/assets/notfound.png";
        }

        // Year
        let year = "Unknown";
        if (film.release_date) {
            year = escapeHTML(film.release_date.split("-")[0]);
        }

        // Note
        let note = typeof film.vote_average === "number" ? film.vote_average : 0;

        const score = Math.round(note * 10);
        let badgeColor = getColor(score);

        let badgeRating = "";
        if (note > 0){
            badgeRating = `<div class="rating-badge" style="color: ${badgeColor}; border: 2px solid ${badgeColor}">${escapeHTML(note.toFixed(1))}</div>`
        }

        const AOS = aos ? 'data-aos="zoom-in" data-aos-duration="300" data-aos-easing="ease"' : '';

        htmlContent += `
            <a href="movie.html" target="_blank" class="movie-card" id="movie-${escapeHTML(film.id)}" ${AOS}>
                <img src="${image}" alt="${altText}" onerror="this.src='../../assets/notfound.png'">
                ${badgeRating}
                <h3>${altText}</h3>
                <p>${year}</p>
            </a>`
        }

    return htmlContent;
}

document.addEventListener("click", (event) => {
    const card = event.target.closest(".movie-card"); // Takes the parent element closest to the click (Card)
    if (!card) return;

    event.preventDefault();

    const movieId = card.id.split("movie-")[1];
    localStorage.setItem("MOVIE_ID", movieId);

    window.location.href = "movie.html"; // Redirect to the movie page
});


export {generateMovieCard}