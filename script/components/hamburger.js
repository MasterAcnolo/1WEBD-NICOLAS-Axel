screenWidth = window.innerWidth;
const hamburgerIcon = document.getElementById("hamburger-button");
const hamburgerOverlay = document.getElementById("hamburger-overlay");
const hamburgerMenu = document.getElementById("hamburger-menu");

let isActive = false

document.addEventListener("DOMContentLoaded", function() {

    screenWidth = window.innerWidth;
    const hamburgerIcon = document.getElementById("hamburger-button");
    const hamburgerOverlay = document.getElementById("hamburger-overlay");
    const hamburgerMenu = document.getElementById("hamburger-menu");

    if (screenWidth <= 768) {
        hamburgerIcon.style.display = "block";
    }

    hamburgerIcon.addEventListener("click", function () {
    isActive = !isActive;

    // fade out
    hamburgerIcon.style.transition = "opacity 0.3s ease";
    hamburgerIcon.style.opacity = 0;

        setTimeout(() => {
            if (isActive) {
                hamburgerMenu.classList.add("active");
                hamburgerOverlay.classList.add("active");
                hamburgerIcon.src = "../../assets/icon/cross.png";
                document.body.style.overflow = "hidden";
            } else {
                hamburgerMenu.classList.remove("active");
                hamburgerOverlay.classList.remove("active");
                hamburgerIcon.src = "../../assets/icon/hamburger.png";
                document.body.style.overflow = "auto";
            }

            // fade in
            hamburgerIcon.style.opacity = 1;
        }, 100); // correspond à la durée du fade
    });


});
