import { fetchMovies } from "../services/fetch.js";

let discoverBuffer = [];
let discoverPage = 1; // TMDb page
const DISCOVER_CHUNK = 20; // Maximum movies / pages

// Fills the buffer with TMDb films as long as we don’t have enough
async function fillDiscoverBuffer() {
    while (discoverBuffer.length < DISCOVER_CHUNK) {
        const data = await fetchMovies("DISCOVER","", discoverPage);
        if (!data || !data.results || data.results.length === 0) break;

        discoverBuffer.push(...data.results);
        discoverPage += 1;
    }
}

// Fetch "count" films from the buffer
async function getDiscoverMovies(count = DISCOVER_CHUNK) {
    if (discoverBuffer.length < count) {
        await fillDiscoverBuffer();
    }

    const moviesToReturn = discoverBuffer.slice(0, count);
    discoverBuffer = discoverBuffer.slice(count); // We remove those that we return
    return moviesToReturn;
}

export { getDiscoverMovies};
