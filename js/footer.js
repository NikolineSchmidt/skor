"use strict";

// Vent på, at DOM'en er færdig med at indlæse
document.addEventListener("DOMContentLoaded", () => {
    console.log("Footer.js er korrekt linket og klar!");

    // Dynamisk indlæsning af Google Maps
    const mapContainer = document.getElementById("map");

    if (mapContainer) {
        const iframe = document.createElement("iframe");
        iframe.src =
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.973558906164!2d10.204745716000657!3d56.15748478065316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c3f91d9df5481%3A0xa0240faeaf229c45!2sTelefontorvet%2010%2C%208000%20Aarhus!5e0!3m2!1sen!2sdk!4v1698342388339!5m2!1sen!2sdk&zoomControl=false&scrollwheel=false&disableDefaultUI=true&enableNewStyle=true";
        iframe.width = "100%";
        iframe.height = "200";
        iframe.style.border = "0";
        iframe.allowFullscreen = "";
        iframe.loading = "lazy";

        // Tilføj Google Maps iframe til map-container
        mapContainer.appendChild(iframe);
    } else {
        console.error("Google Maps container blev ikke fundet!");
    }

    // Tilføj smooth scrolling til footer-link
    const footerLink = document.querySelectorAll('a[href="#kontakt"]');

    footerLink.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Stop default navigation
            const footer = document.getElementById("kontakt");
            if (footer) {
                footer.scrollIntoView({
                    behavior: "smooth", // Giver en blød scrollingseffekt
                    block: "end" // Sørg for, at footeren vises korrekt
                });
            } else {
                console.error("Footer med id 'kontakt' blev ikke fundet!");
            }
        });
    });
});
