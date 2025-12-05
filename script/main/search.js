import { fetchMovies } from "../services/fetch.js";
import generateMovieCard from "../components/moviecard.js";

const searchBar = document.getElementById("searchInput");
const outputContainer = document.getElementById("search-container");

document.addEventListener("DOMContentLoaded", function () {
    if (!outputContainer || !searchBar) {
        console.error("HTML Manquant ou incomplet");
        return;
    }

    searchBar.addEventListener("input", function () {
        const query = searchBar.value.trim();

        if (query.length === 0) {
            outputContainer.innerHTML = ""; 
            return;
        }

        runSearch(query);
    });
});

async function runSearch(query) {
    try {
        const data = await fetchMovies("KEYWORDS", query);

        if (!data || !data.results || data.results.length === 0) {
            outputContainer.innerHTML = "<p>Aucun film trouvé</p>";
            return;
        }

        outputContainer.innerHTML = "";

        const div = document.createElement("div");
        div.style.display = "flex";
        div.style.flexWrap = "wrap";

        // Comme discover, on envoie { results: ... }
        div.innerHTML = generateMovieCard({ results: data.results }, data.results.length);

        outputContainer.appendChild(div);

    } catch (error) {
        console.error("Erreur pendant la recherche :", error);
    }
}
