document.getElementById('dartBookingForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Stopper siden fra at reloade

    // Hent brugerens input
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const players = document.getElementById('players').value;

    // Simpel validering
    if (date && time && players) {
        alert(`Du har booket en dartbane den ${date} kl. ${time} for ${players} spillere!`);
    } else {
        alert('Udfyld venligst alle felter.');
    }
});

// Firmaarrangement forespørgsel
document.getElementById('eventForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const company = document.getElementById('company').value;
    const participants = document.getElementById('participants').value;
    const message = document.getElementById('message').value;

    if (company && participants && message) {
        alert(`Tak for din forespørgsel, ${company}. Vi vender tilbage hurtigst muligt!`);
    } else {
        alert('Udfyld venligst alle felter.');
    }
});