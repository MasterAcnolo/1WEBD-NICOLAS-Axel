import { fetchMovies } from "../services/fetch.js";
import  generateMovieCard  from "../components/moviecard.js"
import giveLetter from "../helpers/random.js";
import getMaxBySize from "../helpers/pagination.js";

const trendingContainer = document.getElementById("trending-container");
const discoverContainer = document.getElementById("discover-container");

const max = getMaxBySize(300);
let page = 2 // Page par défaut pour discover

function trendingMovies(){
    fetchMovies("YEAR", "NONE" ,"2025", "1") // l'argument "NONE" est essentiel, sinon ça décale tout
        .then((data) => {

            const trendingMovies = generateMovieCard(data, max); 

            trendingContainer.innerHTML = trendingMovies;
        
        })
        .catch((error) => {
            console.error("Erreur pendant le parsing :", error);
        });
};

function discoverMovies(page){
    fetchMovies("YEAR", "NONE" ,"2025", page)
        .then((data) => {

            const discoverMovies = generateMovieCard(data, max); 
            console.log(discoverMovies)

            discoverContainer.innerHTML = discoverMovies;
        
        })
        .catch((error) => {
            console.error("Erreur pendant le parsing :", error);
        });

}

document.addEventListener("DOMContentLoaded", function(){

    if(!trendingContainer || !discoverContainer){
        console.error("HTML Manquant ou incomplet");
    } else{ 
        trendingMovies();
        discoverMovies(page);
    };
});