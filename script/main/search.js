const searchBar = document.getElementById("searchInput");
const outputContainer = 

document.addEventListener("DOMContentLoaded", function(){

    searchBar.addEventListener("input", function(e){
        console.log(searchBar.value)
    })
});