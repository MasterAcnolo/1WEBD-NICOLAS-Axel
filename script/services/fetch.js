import { API_KEY } from "../APIKEY.js";
const DATE = new Date();
const UTCYEAR = DATE.getFullYear() + 1;

const BASE_URL = "https://api.themoviedb.org/3";


// TYPE sera soit ID soit KEYWORDS. ID fera une recherche sur l'ID, et KEYWORDS une recherche via mot clés
async function fetchMovies(TYPE, ARGS = "", PAGE = 1, YEAR = 2025) {
    let URL = "";
    const ENCODEDARGS = encodeURIComponent(ARGS);

    if (TYPE === "KEYWORDS") {
        URL = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${ENCODEDARGS}&page=${PAGE}&language=en-US`;
    
        
    } else if (TYPE === "TRENDING") {
        // tendances du jour
        URL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&page=${PAGE}`;


    } else if (TYPE === "DISCOVER") {
        URL = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=${PAGE}`;


    }else if (TYPE === "POPULAR") {
        // films populaires
        URL = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${PAGE}`;
    
        
    } else if (TYPE === "ID") {
        URL = `${BASE_URL}/movie/${ENCODEDARGS}?api_key=${API_KEY}&language=en-US`;


    } else if (TYPE === "YEAR") {
        if (YEAR > UTCYEAR || PAGE <= 0) {
            throw new Error("L'année et/ou la page sont incorrectes");

        } else{
            URL = `${BASE_URL}/discover/movie?api_key=${API_KEY}&primary_release_year=${YEAR}&page=${PAGE}&language=en-US`;
        }

    
    } else {
        throw new Error("Erreur d'arguments");
    }

    console.log("TMDb URL:", URL);

    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error("Erreur HTTP " + response.status);
        }

        const data = await response.json();
        return data;

    } catch (err) {
        console.error("Erreur dans fetchMovies :", err);
        return null;
    }
}

export { fetchMovies };