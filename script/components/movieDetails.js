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
    let actorsHtml = "";
    if (movie.credits && movie.credits.cast && movie.credits.cast.length > 0) {
        const topActors = movie.credits.cast.slice(0, 7);
        
        topActors.forEach(actor => {
            const pic = actor.profile_path 
                ? `https://image.tmdb.org/t/p/w185${actor.profile_path}` 
                : "../../assets/person-notfound.png";

            const character = actor.character || "Unknown";

            actorsHtml += `
                <div class="actor-card">
                    <img src="${pic}" alt="${actor.name}">
                    <p class="actor-name">${actor.name}</p>
                    <p class="actor-character">${character}</p>
                </div>
            `;
        });
    } else {
        actorsHtml = "<p>Unknown</p>";
    }


    // Rating stars
    const maxStars = 5;
    let ratingValue = typeof movie.vote_average === "number" ? movie.vote_average : 0;
    const starRatio = ratingValue / 10; // 0 to 1
    let ratingStars = "";

    if (starRatio == 0){
        ratingStars = "Not Rated Yet"
    }else{
        for (let i = 0; i < maxStars; i++) {
        ratingStars += `<span style="color: ${i < starRatio * maxStars ? "yellow" : "gray"}">★</span>`;
        };
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
    let metascore = "";

    if (typeof movie.vote_average === "number") {
        if (movie.vote_average === 0) {
            metascore = `<span style="color: red">Not Rated Yet</span>`;
        } else {
            const score = Math.round(movie.vote_average * 10); // sur 100
            let color = "";

            if (score < 50) {
                color = "red";
            } else if (score < 75) {
                color = "orange";
            } else {
                color = "green";
            }

            metascore = `<span style="font-weight:400;color: ${color}">${score}</span>`;
        }
    }


    return `
    <div class="movie-details">

        <div class="first-line">
            <div class="movie-left" style="display: flex; flex-direction: column;">
                <img src="${poster}" class="poster">
            </div>

            <div class="movie-right">

                <div class="title">
                    <h1>${title}<span class="year">(${year})</span></h1>

                    <div class="movie-details-button">
                        <button class="fav-btn" data-id="${movie.id}">
                            <img class="fav-img" src="">
                        </button>

                        <button class="bookmark-btn" data-id="${movie.id}">
                            <img class="book-img" src="">
                        </button>
                    </div>
                </div>
                <p class="genres">${genres}</p>

                <p class="overview">${overview}</p>

                <div class="info-grid">

                    <p><strong>Duration:</strong> ${duration}</p>

                    <p><strong>Director:</strong> ${director}</p>

                    <p><strong>Rating:</strong> ${ratingStars}</p>

                    <p><strong>Box Office:</strong> ${revenue}</p>

                    ${classificationHTML}

                    <p><strong>MetaScore:</strong> ${metascore}</p>
                </div>
                
            </div>
        </div>
        
        <div class="actors-container">
            <p><strong>Casting</strong></p>
            
            <div class="actors">${actorsHtml} </div>
        </div>

    </div>
    `;
}

export { generateMovieDetails };
