import { fetchMovies } from "../services/fetch.js";
import {generateMovieCard} from "../components/moviecard.js";
import {getMaxBySize, getGridColumns} from "../helpers/pagination.js";
import { getDiscoverMovies } from "../helpers/buffer.js";

const trendingContainer = document.getElementById("trending-container");
const discoverContainer = document.getElementById("discover-container");
const loadMoreButton = document.getElementById("load-more");

const searchBarInput = document.getElementById("searchInput");
const searchBarButton = document.getElementById("searchBtn");

const max = getMaxBySize();

function trendingMovies() {

    const trendingCardAmount = getGridColumns(trendingContainer);

    fetchMovies("TRENDING")
        .then((data) => {
            const trendingMoviesHTML = generateMovieCard(data, trendingCardAmount);
            trendingContainer.innerHTML = trendingMoviesHTML;
        })
        .catch((error) => {
            console.error("Error when Parsing for Trending Movies :", error);
        });
}

async function discoverMovies() {
    const movies = await getDiscoverMovies(max);

    if (!movies || movies.length === 0) {
        loadMoreButton.style.display = "none";
        return;
    } else {
        loadMoreButton.style.display = "";
    }

    movies.forEach(film => {
        const html = generateMovieCard({ results: [film] }, 1);
        const temp = document.createElement("div");
        temp.innerHTML = html;
        const card = temp.querySelector(".movie-card");
        card.classList.add("fade-slide-in");
        discoverContainer.appendChild(card);
    });
}


document.addEventListener("DOMContentLoaded", function () {
    if (!trendingContainer || !discoverContainer) {
        console.error("HTML Not here or incomplete");
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

searchBarInput.addEventListener("input", function(){
    let value = searchBarInput.value
    
    localStorage.setItem("INDEX-SEARCH", value);
})

searchBarButton.addEventListener("click", function(){
    window.location.href = "search.html"
})

searchBarInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        window.location.href = "search.html"
    }
});
