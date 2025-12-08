// Démarrage d'AOS
AOS.init();

const searchLinks = document.querySelectorAll('a.link');

searchLinks.forEach(link => {
    if (link.textContent.trim() === "Search") {
        link.addEventListener("click", () => {
            localStorage.removeItem("INDEX-SEARCH");
            console.log("INDEX-SEARCH cleared");
        });
    }
});
