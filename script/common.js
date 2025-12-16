// Démarrage d'AOS
AOS.init({
    once: true,
    startEvent: 'DOMContentLoaded'
});

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

/* SETTINGS CENTER */
const bookmarkIDName = "BOOKMARKS"
const likeIDName = "LIKES"

const maxActorAmount = 14;

export {bookmarkIDName, likeIDName, maxActorAmount}