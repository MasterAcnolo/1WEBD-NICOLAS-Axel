export default function generateMovieCard(data, limit) {
    let htmlContent = "";

    if (data.Response === "False") {
        return "<p>Aucun film trouvé.</p>";
    }
    const tableauDeFilms = data.Search;

    for (let i = 0; i < limit; i++) {
        
        // Sécurité : Si on demande 10 films mais qu'il n'y en a que 3, on arrête la boucle
        if (i >= tableauDeFilms.length) {
            break; 
        }

        const film = tableauDeFilms[i];
        const altText = film.Title || "Film non trouvé";

        let image = film.Poster;
        if (!image || image === "N/A") {
            image = "../../assets/notfound.png";
        }

       
        htmlContent += `
            <div class="movie-card" data-aos="fade-up">
                <img src="${image}" alt="${altText}" onerror="this.src='../../assets/notfound.png'"> 
                <h3>${film.Title}</h3>
                <p>${film.Year}</p>
            </div>
        `;
    }

    return htmlContent;
}