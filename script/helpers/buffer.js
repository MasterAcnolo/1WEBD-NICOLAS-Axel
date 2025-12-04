import { fetchMovies } from "../services/fetch.js";

let discoverBuffer = [];
let discoverPage = 1; // Page TMDb
const DISCOVER_CHUNK = 20; // Nombre de films à afficher à chaque fois

// Remplit le buffer avec des films TMDb tant qu'on a pas assez
async function fillDiscoverBuffer() {
    while (discoverBuffer.length < DISCOVER_CHUNK) {
        const data = await fetchMovies("DISCOVER","", discoverPage);
        if (!data || !data.results || data.results.length === 0) break;

        discoverBuffer.push(...data.results);
        discoverPage += 1;
    }
}

// Récupère "count" films depuis le buffer
async function getDiscoverMovies(count = DISCOVER_CHUNK) {
    if (discoverBuffer.length < count) {
        await fillDiscoverBuffer();
    }

    const moviesToReturn = discoverBuffer.slice(0, count);
    discoverBuffer = discoverBuffer.slice(count); // On retire ceux qu'on retourne
    return moviesToReturn;
}

// Permet de réinitialiser le buffer si besoin
function resetDiscoverBuffer() {
    discoverBuffer = [];
    discoverPage = 1;
}

export { getDiscoverMovies, resetDiscoverBuffer };
