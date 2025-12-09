function generateMovieDetails(movie) {

    // Poster
    let poster = "";
    if (movie.poster_path) {
        poster = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    } else {
        poster = "../../assets/notfound.png";
    }

    // Genres
    let genres = "Unknown";
    if (movie.genres && movie.genres.length > 0) {

        genres = "";

        if (movie.genres && movie.genres.length > 0) {
            genres = movie.genres.map(function(e) {
                return e.name;
            }).join(", ");
        }
    }

    // Director
    let director = "Unknown";
    if (movie.credits && movie.credits.crew) {
        for (let i = 0; i < movie.credits.crew.length; i++) {
            if (movie.credits.crew[i].job === "Director") {
                director = movie.credits.crew[i].name;
                break; //Director found
            }
        }
    }

    // Actors
    let actors = "Unknown";
    if (movie.credits && movie.credits.cast && movie.credits.cast.length > 0) {
        const topActors = movie.credits.cast.slice(0, 5).map(a => a.name); // Get the 5 first actor, and return only the name
        if (topActors.length > 0) {
            actors = topActors.join(", ");
        }
    }

    // Rating stars
    let ratingStars = "";
    let ratingValue = 0;
    if (typeof movie.vote_average === "number") {
        ratingValue = movie.vote_average;
        const starCount = Math.round(ratingValue / 2);
        for (let i = 0; i < starCount; i++) {
            ratingStars += "★";
        }
    }

    // Title
    let title = "N/A";
    if (movie.title) {
        title = movie.title;
    }

    // Description
    let overview = "No summary available.";
    if (movie.overview) {
        overview = movie.overview;
    }

    // Duration
    let duration = "N/A";
    if (movie.runtime) {
        duration = movie.runtime + " min";
    }

    // Year
    let year = "N/A";
    if (movie.release_date) {
        year = movie.release_date.slice(0, 4);
    }

    // Revenue
    let revenue = "N/A";
    if (typeof movie.revenue === "number" && movie.revenue > 0) {
        revenue = movie.revenue.toLocaleString() + " $"; // toLocaleString format = space between number for money
    }

    // Classification
    let classificationHTML = "";
    if (movie.adult === true) {
        classificationHTML = "<p><strong>Classification:</strong> 18+</p>";
    }

    // Metascore
    let metascore = "N/A";
    if (typeof movie.vote_average === "number") {
        metascore = Math.round(movie.vote_average * 10);
    }

    return `
    <div class="movie-details">

        <div class="movie-left" style="display: flex; flex-direction: column;">
            <img src="${poster}" class="poster">
        </div>

        <div class="movie-right">
            <h1>${title}</h1>

            <p class="genres">${genres}</p>

            <p class="overview">${overview}</p>

            <div class="info-grid">

                <p><strong>Duration:</strong> ${duration}</p>

                <p><strong>Actors:</strong> ${actors}</p>

                <p><strong>Director:</strong> ${director}</p>

                <p><strong>Rating:</strong> ${ratingStars} (${ratingValue})</p>

                <p><strong>Year:</strong> ${year}</p>

                <p><strong>Box Office:</strong> ${revenue}</p>

                ${classificationHTML}

                <p><strong>MetaScore:</strong> ${metascore}</p>

            </div>

            <div class="movie-details-button">
                <button class="fav-btn" data-id="${movie.id}">
                    <img class="fav-img" src="">
                </button>

                <button class="bookmark-btn" data-id="${movie.id}">
                    <img class="book-img" src="">
                </button>
            </div>
            
        </div>

    </div>
    `;
}

export { generateMovieDetails };
