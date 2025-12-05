const searchBar = document.getElementById("searchInput");

document.addEventListener("DOMContentLoaded", function(){

    searchBar.addEventListener("input", function(e){
        console.log(searchBar.value)
    })
});