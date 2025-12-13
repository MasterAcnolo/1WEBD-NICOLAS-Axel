import {getColor} from "../helpers/color.js"

function generateMovieCard(data, limit) {
    let htmlContent = "";

    if (!data || !data.results || data.results.length === 0) {
        return "<p>Aucun film trouvé.</p>";
    }
    
    const tableauDeFilms = data.results;

    for (let i = 0; i < limit; i++) {
        
        // Security: If we ask for 10 movies but there are only 3, we stop the loop
        if (i >= tableauDeFilms.length) {
            break; 
        }

        const film = tableauDeFilms[i];
        const altText = film.Title || "Film non trouvé";

        let image = `https://image.tmdb.org/t/p/w500/${film.poster_path}`;
        if (!image || image === "N/A") {
            image = "../../assets/notfound.png";
        }

        // Année
        let year = "Inconnu";
        if (film.release_date) {
            year = film.release_date.split("-")[0];
        }

        //Note
        let note = typeof film.vote_average === "number" ? film.vote_average : 0;

        const score = Math.round(note * 10);
        let badgeColor = ""
        badgeColor = getColor(score)

        let badgeRating = ""

        if (note > 0){
            badgeRating = `<div class="rating-badge" style="color: ${badgeColor}; border: 2px solid ${badgeColor}">${note}</div>`
        }

        htmlContent += `
            <a href="movie.html" target="_blank" class="movie-card" id="movie-${film.id}">
                <img src="${image}" alt="${altText}" onerror="this.src='../../assets/notfound.png'">
                ${badgeRating}
                <h3>${film.title}</h3>
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