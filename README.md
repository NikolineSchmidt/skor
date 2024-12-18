# README

Dette projekt indeholder JavaScript-filer, der håndterer forskellige funktionaliteter på Skors hjemmeside. Filerne omfatter navigation, footer, bookingformularer og gavekortbestilling. Hver fil er beskrevet nedenfor med detaljer om dens funktionalitet.

## Indhold

- [nav.js](#navjs)
- [footer.js](#footerjs)
- [bestilling.js](#bestillingjs)
- [burger-boom.js](#burger-boomjs)

## nav.js

### Funktionalitet

- **Navigation Menu Toggle:** Denne fil håndterer interaktionen med hovednavigationen. Når en bruger klikker på et menupunkt, åbner eller lukker undermenuen for det pågældende punkt.
- **Stopper klik på undermenu links:** Klik på links i undermenuerne forhindres i at lukke hele menuen, så brugeren kan navigere mellem undermenuerne uden problemer.

### Brug

- Filen anvender event listeners på alle menupunkter (med klassen `.nav-list-item`), og toggler synligheden af undermenuer (med klassen `.nav-sub-menu`).
- Hvis en bruger klikker på et link i en undermenu (med klassen `.nav-sub-menu-item`), stoppes propagationen for at undgå lukning af menuen.

## footer.js

### Funktionalitet

- **Dynamisk Google Maps Integration:** Når DOM'en er klar, tilføjes et iframe-element med Google Maps. Dette bruges til at vise en integreret kortvisning i footeren.
- **Smooth Scrolling:** Når et link med href="#kontakt" bliver klikket, ruller siden blødt ned til en element med id'et `kontakt`.

### Brug

- Denne fil anvender `DOMContentLoaded`-begivenheden for at sikre, at DOM'en er fuldt indlæst, før funktionaliteten anvendes.
- Google Maps iframe tilføjes dynamisk til elementet med id `map`, og navigation til footeren er aktiveret for et blødt scroll.

## bestilling.js

### Funktionalitet

- **Booking af Dartbaner:** Filen håndterer en bookingformular for dartbaner. Brugeren udfylder formularen, og når formularen sendes, vises en bekræftelse med information om den reserverede bane.
- **Booking af Karaoke:** På samme måde som dartbooking håndterer denne funktion karaoke-besøg, med en bekræftelse efter indsendelsen.
- **Tidsstyring:** Afhængig af den valgte dato (uge- eller weekenddag) opdateres tidspunkterne for booking.
- **Bestilling af gavekort:** Brugeren kan bestille gavekort med et bestemt beløb, og en bekræftelse vises med betalingsdetaljer.

### Brug

- **Dartbooking:** Udfyld formularen for dartbooking, og når formularen indsendes, vises en bekræftelse af dato, tid, antal spillere og varighed.
- **Karaoke-booking:** Samme funktionalitet som dartbooking, men for karaoke-rum.
- **Tidsvalg:** Baseret på den valgte dato vises tidsintervaller for booking af dart- eller karaoke-rum. Weekenddage har længere åbningstider (fra 15:00 til 01:00), mens hverdage har åbningstider fra 15:00 til 22:00.
- **Gavekort:** Brugeren kan vælge beløb og betale via formularen, og en bekræftelse vises.

### Krav

- Filen kræver, at HTML-dokumentet indeholder de nødvendige formularer med de korrekte id'er (`dartBookingForm`, `karaokeBookingForm`, `giftCardForm`, etc.).
- For korrekt funktion af tidsstyring skal datovælgeren have et gyldigt datoformat.

## burger-boom.js

### Funktionalitet

- **Generering af prikker mellem burger-navn og pris:** Denne fil håndterer genereringen af prikker mellem burger-navnet og prisen i menuen. Prikkerne tilpasses dynamisk afhængigt af længden af burger-navnet og prisen, og fylder præcist rummet mellem de to elementer.
- **Responsive prikker:** Prikkerne justerer sig automatisk, når vinduet ændres i størrelse, så layoutet forbliver responsivt.

### Brug

- Filen anvender `window.addEventListener` til at køre funktionen `generateDots` både ved indlæsning af siden og når størrelsen på vinduet ændres.
- Prikkerne beregnes baseret på bredden af burger-navnet og prisen, så de fylder det tilgængelige rum mellem de to elementer.

## Installation

1. Download eller klon projektet.
2. Sørg for, at de relevante HTML-elementer er til stede på siden med de korrekte id'er og klasser, som refereret i JavaScript-filerne.
3. Link JavaScript-filerne til dit HTML-dokument før `</body>`-tagget:

```html
<script src="path/to/nav.js"></script>
<script src="path/to/footer.js"></script>
<script src="path/to/bestilling.js"></script>
<script src="path/to/burger-boom.js"></script>
