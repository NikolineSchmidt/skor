// JavaScript for toggle burger menu
const navCheck = document.getElementById("nav-check");
const navList = document.querySelector(".nav-list");

navCheck.addEventListener("change", () => {
    if (navCheck.checked) {
        navList.style.display = "flex";
    } else {
        navList.style.display = "none";
    }
});
document.querySelectorAll('.nav-list-item').forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('active'); // Tilføjer eller fjerner 'active' klassen
    });
});
