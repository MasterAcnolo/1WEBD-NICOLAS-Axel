import { fetchMovies } from "../services/fetch.js";
import {generateMovieCard} from "../components/moviecard.js";
import {getMaxBySize, manageCardLayout} from "../helpers/pagination.js";
import { getDiscoverMovies } from "../helpers/buffer.js";

const trendingContainer = document.getElementById("trending-container");
const discoverContainer = document.getElementById("discover-container");
const loadMoreButton = document.getElementById("load-more");


const max = getMaxBySize(manageCardLayout());

function trendingMovies() {
    fetchMovies("TRENDING")
        .then((data) => {
            const trendingMoviesHTML = generateMovieCard(data, max);
            trendingContainer.innerHTML = trendingMoviesHTML;
        })
        .catch((error) => {
            console.error("Erreur pendant le parsing trending :", error);
        });
}

async function discoverMovies() {
    const movies = await getDiscoverMovies(max);

    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.flexWrap = "wrap";

    div.innerHTML = generateMovieCard({ results: movies }, movies.length); // { results: movies } faut envoyer ça pour cet API
    div.classList.add("fade-slide-in");
    discoverContainer.appendChild(div);
}

document.addEventListener("DOMContentLoaded", function () {
    if (!trendingContainer || !discoverContainer) {
        console.error("HTML Manquant ou incomplet");
    } else {
        trendingMovies();
        discoverMovies();
    }
});

loadMoreButton.addEventListener("click", async function (e) {
    e.preventDefault();
    await discoverMovies();
});

loadMoreButton.addEventListener("auxclick", e => e.preventDefault());