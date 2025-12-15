import { API_KEY } from "../APIKEY.js";
const DATE = new Date();

const BASE_URL = "https://api.themoviedb.org/3";


// TYPE will be ID or KEYWORDS. ID will search on the ID, and KEYWORDS a search via keywords.
async function fetchMovies(TYPE, ARGS = "", PAGE = 1, YEAR = 2025) {
    let URL = "";
    const ENCODEDARGS = encodeURIComponent(ARGS);

    if (TYPE === "KEYWORDS") {
        URL = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${ENCODEDARGS}&page=${PAGE}&language=en-US`;
    
        
    } else if (TYPE === "TRENDING") {
        URL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&page=${PAGE}`;


    } else if (TYPE === "DISCOVER") {
        URL = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=${PAGE}`;


    }else if (TYPE === "POPULAR") {
        URL = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${PAGE}`;
    
        
    } else if (TYPE === "ID") {
        URL = `${BASE_URL}/movie/${ENCODEDARGS}?api_key=${API_KEY}&language=en-US&append_to_response=credits`;


    }  else if (TYPE === "COLLECTION") {
        URL = `${BASE_URL}/collection/${ENCODEDARGS}?api_key=${API_KEY}&language=en-US`;
        
    } else {
        throw new Error("An Error Occured when fetching, Incorrect ARGS");
    }

    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error("HTTP ERROR" + response.status);
        }

        const data = await response.json();
        return data;

    } catch (err) {
        console.error("Fetch Movies Error :", err);
        return null;
    }
}

export { fetchMovies };