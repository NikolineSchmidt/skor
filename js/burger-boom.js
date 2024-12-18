"use strict"

   // Funktion til at generere prikker fra burgernavn til pris
   function generateDots() {
    const menuItems = document.querySelectorAll('.burgerboom-menu p');

    menuItems.forEach(item => {
        const burgerName = item.querySelector('.burger-name');
        const price = item.querySelector('.price');
        const dots = item.querySelector('.dots');

        // Beregn afstanden mellem burgernavnet og prisen
        const burgerWidth = burgerName.offsetWidth;
        const priceWidth = price.offsetWidth;
        const totalWidth = item.offsetWidth;
        const availableWidth = totalWidth - burgerWidth - priceWidth;

        // Beregn antallet af prikker (prikkernes bredde er hårdkodet)
        const dotWidth = 12; // Bredde af en prik (kan justeres)
        const numDots = Math.floor(availableWidth / dotWidth);

        // Fjern eksisterende prikker og tilføj nye
        dots.innerHTML = ''; // Tøm dots containeren

        // Tilføj prikker til at fylde hele rummet
        for (let i = 0; i < numDots; i++) {
            const dot = document.createElement('span');
            dot.textContent = '.';
            dots.appendChild(dot);
        }
    });
}

// Kald funktionen, når siden er indlæst
window.addEventListener('load', generateDots);
// Kald funktionen, hvis størrelsen af vinduet ændres
window.addEventListener('resize', generateDots);
