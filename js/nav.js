document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".nav-list-item");

    menuItems.forEach((item) => {
        item.addEventListener("click", function (e) {
            // Hvis undermenuen findes, toggle dens synlighed
            const subMenu = item.querySelector(".nav-sub-menu");
            if (subMenu) {
                // Toggle 'active' klassen på menupunktet
                item.classList.toggle("active");

                // Hvis undermenuen er aktiv, vis den, ellers skjul den
                if (item.classList.contains("active")) {
                    subMenu.style.display = "block"; // Vis undermenuen
                } else {
                    subMenu.style.display = "none"; // Skjul undermenuen
                }
            }

            // Luk alle andre undermenuer ved at fjerne 'active' klassen
            menuItems.forEach((el) => {
                if (el !== item) {
                    el.classList.remove("active");
                    const otherSubMenu = el.querySelector(".nav-sub-menu");
                    if (otherSubMenu) {
                        otherSubMenu.style.display = "none"; // Skjul andre undermenuer
                    }
                }
            });
        });
    });
});
