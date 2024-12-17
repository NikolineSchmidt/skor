"use strict;"

const menuItems = document.querySelectorAll(".nav-list-item");

menuItems.forEach((item) => {
    item.addEventListener("click", function (e) {
        const subMenu = item.querySelector(".nav-sub-menu");
        const target = e.target;

        // Hvis undermenuen findes og målet ikke er et undermenu-item
        if (subMenu && !target.classList.contains("nav-sub-menu-item")) {
            // Toggling af undermenuens synlighed
            const isActive = item.classList.contains("active");

            // Luk alle undermenuer først
            menuItems.forEach((el) => el.classList.remove("active"));

            // Hvis undermenuen ikke allerede er aktiv, så åbn den
            if (!isActive) {
                item.classList.add("active");
            }
        }
    }, { passive: true });
});

// Forhindr klik på links i undermenuer at påvirke menuen
const subMenuLinks = document.querySelectorAll(".nav-sub-menu-item a");

subMenuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.stopPropagation(); // Stopper videre propagation, men tillader navigation
    }, { passive: true });
});