import { fetchMovies } from "../services/fetch.js";
import  generateMovieCard  from "../components/moviecard.js"
import giveLetter from "../helpers/random.js";
import getMaxBySize from "../helpers/pagination.js";

const trendingContainer = document.getElementById("trending-container");
const discoverContainer = document.getElementById("discover-container");

const max = getMaxBySize(300);

function trendingMovies(){
    fetchMovies("KEYWORDS", "Fast & Furious")
        .then((data) => {

            const trendingMovies = generateMovieCard(data, max); 

            trendingContainer.innerHTML = trendingMovies;
        
        })
        .catch((error) => {
            console.error("Erreur pendant le parsing :", error);
        });
};

document.addEventListener("DOMContentLoaded", function(){

    if(!trendingContainer || !discoverContainer){
        console.error("HTML Manquant ou incomplet");
    } else{ 
        trendingMovies();
        discoverMovies();
    };
});