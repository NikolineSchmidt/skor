const menuItems = document.querySelectorAll(".nav-list-item");

menuItems.forEach((item) => {
    item.addEventListener("click", function (e) {
        const subMenu = item.querySelector(".nav-sub-menu");
        const target = e.target;

        if (subMenu && !target.classList.contains("nav-sub-menu-item")) {
            // Håndter åbning/lukning af undermenu
            item.classList.toggle("active");

            // Luk alle andre undermenuer
            menuItems.forEach((el) => {
                if (el !== item) {
                    el.classList.remove("active");
                }
            });
        }
    });
});

// Sørg for, at links i undermenuer fungerer normalt
const subMenuLinks = document.querySelectorAll(".nav-sub-menu-item a");

subMenuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.stopPropagation(); // Forhindr klik på linket i at påvirke menuen
        // Linket vil navigere normalt
    });
});

