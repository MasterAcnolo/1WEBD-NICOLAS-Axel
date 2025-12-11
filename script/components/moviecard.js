function generateMovieCard(data, limit) {
    let htmlContent = "";

    if (!data || !data.results || data.results.length === 0) {
        return "<p>Aucun film trouvé.</p>";
    }
    
    const tableauDeFilms = data.results;

    for (let i = 0; i < limit; i++) {
        
        // Sécurité : Si on demande 10 films mais qu'il n'y en a que 3, on arrête la boucle
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

        let badgeColor = "gray";
        if (note === 0) {
            badgeColor = "red";
        } else {
            const score = Math.round(note * 10);
            if (score < 50) badgeColor = "red";
            else if (score < 75) badgeColor = "orange";
            else badgeColor = "green";
        }

        htmlContent += `
            <a href="movie.html" target="_blank" class="movie-card" id="movie-${film.id}">
                <img src="${image}" alt="${altText}" onerror="this.src='../../assets/notfound.png'">
                <div class="rating-badge" style="color: ${badgeColor}; border: 2px solid ${badgeColor}">${note}</div>
                <h3>${film.title}</h3>
                <p>${year}</p>
            </a>`
        }

    return htmlContent;
}

document.addEventListener("click", (event) => {
    const card = event.target.closest(".movie-card"); // Prend l'élément parent le plus proche du click (Card)
    if (!card) return;

    event.preventDefault();

    const movieId = card.id.split("movie-")[1];
    localStorage.setItem("MOVIE_ID", movieId);

    window.location.href = "movie.html"; // Rediriger vers la page movie
});


export {generateMovieCard}