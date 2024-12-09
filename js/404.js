"use strict;"

const dartImage = document.getElementById('dart-image');

dartImage.addEventListener('click', () => {
    // Generer tilfældige x- og y-koordinater inden for vinduets bredde og højde
    const x = Math.random() * (window.innerWidth - dartImage.width);
    const y = Math.random() * (window.innerHeight - dartImage.height);

    // Flyt billedet til de nye koordinater
    dartImage.style.transform = `translate(${x}px, ${y}px)`;
});