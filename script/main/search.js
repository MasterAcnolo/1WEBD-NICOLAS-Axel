import { fetchMovies } from "../services/fetch.js";
import {generateMovieCard} from "../components/moviecard.js";

const searchBar = document.getElementById("searchInput");
const outputContainer = document.getElementById("search-container");

// État interne
let currentQuery = "";
let currentPage = 1;
let totalPages = 1;
let isLoading = false;

document.addEventListener("DOMContentLoaded", function () {
    if (!outputContainer || !searchBar) {
        console.error("HTML Manquant ou incomplet");
        return;
    }

    const savedQuery = localStorage.getItem("INDEX-SEARCH");

    if (savedQuery.length !== 0) {
        searchBar.value = savedQuery;
        currentQuery = savedQuery;
        currentPage = 1;
        totalPages = 1;
        outputContainer.innerHTML = "";
        runSearch(currentQuery, currentPage);
    }

    searchBar.addEventListener("input", function () {
        const query = searchBar.value.trim();

        if (query.length === 0) {
            outputContainer.innerHTML = "";
            currentQuery = "";
            currentPage = 1;
            return;
        }

        // Nouvelle recherche = reset
        currentQuery = query;
        currentPage = 1;
        totalPages = 1;
        outputContainer.innerHTML = "";

        runSearch(currentQuery, currentPage);
    });

    // Scroll infini
    window.addEventListener("scroll", infiniteScroll);
});

async function runSearch(query, page) {
    
    if (isLoading) return;
    isLoading = true;

    try {
        const data = await fetchMovies("KEYWORDS", query, page);

        if (!data || !data.results || data.results.length === 0) {
            if (page === 1) outputContainer.innerHTML = "<p>Aucun film trouvé</p>";
            return;
        }

        totalPages = data.total_pages;

        outputContainer.style.display = "flex";
        outputContainer.style.flexWrap = "wrap";

        outputContainer.innerHTML += generateMovieCard({ results: data.results }, data.results.length);

    } catch (error) {
        console.error("Erreur pendant la recherche :", error);
    }

    isLoading = false;
}


function infiniteScroll() {
    const scrollPos = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    
    if (scrollPos / maxScroll > 0.55 && currentQuery.length > 0 && currentPage < totalPages) {
        currentPage++;
        runSearch(currentQuery, currentPage);
    }
}
