import {getColor} from "../helpers/color.js"
import { escapeHTML } from "../helpers/escapeHTML.js";
import { maxActorAmount } from "../common.js";


function generateMovieDetails(movie) {
    
    // Backdrop
    let backdrop = '';
    if (movie.backdrop_path) {
        const url = `https://image.tmdb.org/t/p/original${escapeHTML(movie.backdrop_path)}`;
        backdrop = `<div class="movie-backdrop" style="background-image:url('${url}')"></div>`;
    }

    // Poster
    let poster = "";
    if (movie.poster_path) {
        poster = "https://image.tmdb.org/t/p/w500" + escapeHTML(movie.poster_path);
    } else {
        poster = "../../assets/notfound.png";
    }

    // Genres
    let genres = "Unknown";
    if (movie.genres && movie.genres.length > 0) {
        genres = movie.genres.map(function(e) {
            return escapeHTML(e.name);
        }).join(", ");
    }

    // Director
    let director = "Unknown";
    if (movie.credits && movie.credits.crew) {
        for (let i = 0; i < movie.credits.crew.length; i++) {
            if (movie.credits.crew[i].job === "Director") {
                director = escapeHTML(movie.credits.crew[i].name);
                break; //Director found
            }
        }
    }

    // Actors
    let actorsHtml = "";
    let actorsCards = "";
    if (movie.credits && movie.credits.cast && movie.credits.cast.length > 0) {
        const topActors = movie.credits.cast.slice(0, maxActorAmount); // Actor Amount
        topActors.forEach(actor => {
            const pic = actor.profile_path 
                ? `https://image.tmdb.org/t/p/w185${escapeHTML(actor.profile_path)}` 
                : "../../assets/person-notfound.png";
            const character = actor.character ? escapeHTML(actor.character) : "Unknown";
            actorsCards += `
                <div class="actor-card">
                    <img src="${pic}" alt="${escapeHTML(actor.name)}">
                    <p class="actor-name">${escapeHTML(actor.name)}</p>
                    <p class="actor-character">${character}</p>
                </div>
            `;
        });
        actorsHtml = `<div class="actors-container">
                        <p><strong>Casting</strong></p>
                        <div class="actors">${actorsCards} </div>
                    </div>`
    } else {
        actorsHtml = "";
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
        title = escapeHTML(movie.title);
    }

    // Description
    let overview = "No summary available.";
    if (movie.overview) {
        overview = escapeHTML(movie.overview);
    }

    // Duration
    let duration = "N/A";
    if (movie.runtime) {
        duration = escapeHTML(movie.runtime) + " min";
    }


    // Year et Release Date
    let year = "N/A";
    let releaseDate = "N/A";

    if (movie.release_date) {
        const date = new Date(movie.release_date);

        year = date.getFullYear();
        releaseDate = date.toLocaleDateString("en-US");
    }


    // Revenue
    let revenue = "N/A";
    if (typeof movie.revenue === "number" && movie.revenue > 0) {
        revenue = escapeHTML(movie.revenue.toLocaleString()) + " $";
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
            const score = Math.round(movie.vote_average * 10); // 100
            let color = getColor(score);

            metascore = `<span style="font-weight:400;color: ${color}">${score}</span>`;
        }
    }


    return `
    ${backdrop}
    <div class="movie-details">

        <div class="first-line">
            <div class="movie-left" style="display: flex; flex-direction: column;">
                <img src="${poster}" class="poster" alt="Movie Poster ${title}">
            </div>

            <div class="movie-right">

                <div class="title">
                    <h1>${title}<span class="year">(${year})</span></h1>

                    <div class="movie-details-button">
                        <button class="fav-btn" data-id="${movie.id} aria-label="Add ${title} to favorites">
                            <img class="fav-img" src="" alt="">
                        </button>

                        <button class="bookmark-btn" data-id="${movie.id} aria-label="Bookmark ${title}"">
                            <img class="book-img" src="" alt="">
                        </button>
                    </div>
                </div>
                <p class="genres">${genres}</p>

                <p class="overview">${overview}</p>

                <div class="info-grid">

                    <p><strong>Duration:</strong> ${duration}</p>

                    <p><strong>Release date:</strong> ${releaseDate}</p>

                    <p><strong>Director:</strong> ${director}</p>

                    <p><strong>Rating:</strong> ${ratingStars}</p>

                    <p><strong>Box Office:</strong> ${revenue}</p>

                    ${classificationHTML}

                    <p><strong>MetaScore:</strong> ${metascore}</p>
                </div>
                
            </div>
        </div>
        
        ${actorsHtml}

    </div>
    `;
}

export { generateMovieDetails };
