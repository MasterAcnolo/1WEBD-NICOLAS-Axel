import { fetchMovies } from "../services/fetch.js";
import  generateMovieCard  from "../components/moviecard.js"
import getMaxBySize from "../helpers/pagination.js";

const trendingContainer = document.getElementById("trending-container");
const discoverContainer = document.getElementById("discover-container");

const loadMoreButton = document.getElementById("load-more");

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

    const div = document.createElement("div");

    fetchMovies("YEAR", "NONE" ,"2025", page)
        .then((data) => {

            const discoverMovies = generateMovieCard(data, max); 
            div.innerHTML = discoverMovies
            console.log(div);   

            div.style.display = "flex"
            div.style.flexWrap = "wrap";
            discoverContainer.appendChild(div);
        
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

loadMoreButton.addEventListener("click", function(e){

    e.preventDefault();

    console.log("loadmore")
    page += 1
    discoverMovies(page)

});