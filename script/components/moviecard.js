export default function generateMovieCard(data, limit) {
    let htmlContent = "";

    if (!data || !data.results || data.results.length === 0) {
        return "<p>Aucun film trouvé.</p>";
    }
    
    const tableauDeFilms = data.results;

    for (let i = 1; i < limit; i++) {
        
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

        htmlContent += `
            <div class="movie-card">
                <img src="${image}" alt="${altText}" onerror="this.src='../../assets/notfound.png'">
                <h3>${film.title}</h3>
                <p>${year}</p>
            </div>
        `;
    }

    return htmlContent;
}