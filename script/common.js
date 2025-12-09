// Démarrage d'AOS
AOS.init();

const searchLinks = document.querySelectorAll('a.link');

/* Function to clear search.html (new research)*/
searchLinks.forEach(link => {
    if (link.textContent.trim() === "Search") {
        link.addEventListener("click", () => {
            localStorage.removeItem("INDEX-SEARCH");
            console.log("INDEX-SEARCH cleared");
        });
    }
});
