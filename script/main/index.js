import { fetchMovies } from "../services/fetch.js";
import  generateMovieCard  from "../components/moviecard.js"

const trendingContainer = document.getElementById("trending-container");


document.addEventListener("DOMContentLoaded", function(){
    
    fetchMovies("KEYWORDS", "Fast & Furious")
    .then((data) => {


        // TEST ONLY
        console.log("Données reçues :", data);
        const leHTMLFinal = generateMovieCard(data, 6); 

        trendingContainer.innerHTML = leHTMLFinal;
    
    })
    .catch((error) => {
        console.error("Erreur pendant le parsing :", error);
    });
    
});