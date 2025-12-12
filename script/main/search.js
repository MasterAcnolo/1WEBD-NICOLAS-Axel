import { fetchMovies } from "../services/fetch.js";
import {generateMovieCard} from "../components/moviecard.js";

const searchBar = document.getElementById("searchInput");
const outputContainer = document.getElementById("search-container");
const resultsInfo = document.getElementById("results-info");
const endZone = document.getElementById("end-message");

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

    if (savedQuery) {
        searchBar.value = savedQuery;
        currentQuery = savedQuery;
        currentPage = 1;
        totalPages = 1;
        outputContainer.innerHTML = "";
        runSearch(currentQuery, currentPage);
    }

    searchBar.addEventListener("input", function () {
        const query = searchBar.value.trim();
        localStorage.setItem("INDEX-SEARCH", query)

        if (query.length === 0) {
            outputContainer.innerHTML = "";
            resultsInfo.innerHTML = ""
            currentQuery = "";
            endZone.innerHTML = "";
            currentPage = 1;
            return;
        }

        if (isLoading) return;

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
            resultsInfo.innerHTML = "<p>Aucun film trouvé</p>";
            outputContainer.innerHTML = "";
            endZone.innerHTML = "";
            isLoading = false;
            return;
        }

        totalPages = data.total_pages;
        
        outputContainer.innerHTML += generateMovieCard({ results: data.results }, data.results.length);

        const total = data.total_results || "?";
        resultsInfo.innerHTML = `Affichage de ${outputContainer.children.length} films sur ${total}`;

        if(page === totalPages){
            endZone.innerHTML = ` <h2 class="end-message"> It seems you have reached the end... </h2>`
        }

    } catch (error) {
        console.error("Erreur pendant la recherche :", error);
    }

    isLoading = false;
}


function infiniteScroll() {
    const scrollPos = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    if (!isLoading && scrollPos / maxScroll > 0.55 && currentQuery.length > 0 && currentPage < totalPages) {
        currentPage++;
        runSearch(currentQuery, currentPage);
    }
}