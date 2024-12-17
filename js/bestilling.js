"use strict;"
// herunder laves booking stytem, når man skal booke dartbaner, med en evenlistener, som values i const, derefter går i if loop igang
document.getElementById('dartBookingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const dartDate = document.getElementById('dartDate').value;
    const dartTime = document.getElementById('dartTime').value;
    const dartDuration = document.getElementById('dartDuration').value;
    const dartPlayers = document.getElementById('dartPlayers').value;
    const dartLanes = document.getElementById('dartLanes').value;
    const dartName = document.getElementById('dartName').value;
    const dartContact = document.getElementById('dartContact').value;
// if loop, hvor hvis alle values er korrekte, kommer en alert op, hvor man kan se hvor mange baner man har booket, antal spillere, hvilken dato og i hvor lang tid, hvis starter else, og skriver "Udfyld venligst alle felter"
    if (dartDate && dartTime && dartDuration && dartPlayers && dartLanes && dartName && dartContact) {
        alert(`Tak, ${dartName}! Du har booket ${dartLanes} dartbane(r) den ${dartDate} kl. ${dartTime} for ${dartPlayers} spillere i ${dartDuration} minutter. Vi kontakter dig på ${dartContact}.`);
    } else {
        alert('Udfyld venligst alle felter.');
    }
});
// lavet på sammen måde som dart booking systemet, men bare med andre id'er
document.getElementById('karaokeBookingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const karaokeDate = document.getElementById('karaokeDate').value;
    const karaokeTime = document.getElementById('karaokeTime').value;
    const karaokeDuration = document.getElementById('karaokeDuration').value;
    const karaokeParticipants = document.getElementById('karaokeParticipants').value;
    const karaokeName = document.getElementById('karaokeName').value;
    const karaokeContact = document.getElementById('karaokeContact').value;

    if (karaokeDate && karaokeTime && karaokeDuration && karaokeParticipants && karaokeName && karaokeContact) {
        alert(`Tak, ${karaokeName}! Du har booket et karaoke-rum den ${karaokeDate} kl. ${karaokeTime} for ${karaokeParticipants} deltagere i ${karaokeDuration} minutter. Vi kontakter dig på ${karaokeContact}.`);
    } else {
        alert('Udfyld venligst alle felter.');
    }
});


function updateTimeOptions(timeSelectId, dateInputId) {
    const timeSelect = document.getElementById(timeSelectId);
    const dateInput = document.getElementById(dateInputId).value;
    
    if (!dateInput) return;

    // Find ugedag: Søndag = 0, Mandag = 1, ..., Lørdag = 6
    const selectedDate = new Date(dateInput);
    const dayOfWeek = selectedDate.getDay();

    // Ryd eksisterende muligheder
    timeSelect.innerHTML = '';

    // Bestem tidsinterval baseret på dag
    let startTime, endTime;
    if (dayOfWeek === 5 || dayOfWeek === 6) { // Fredag og Lørdag
        startTime = 15; // 15:00
        endTime = 1; // 01:00 næste dag
    } else { // Alle andre dage
        startTime = 15; // 15:00
        endTime = 22; // 22:00
    }

    // Generer tidspunkter
    for (let hour = startTime; hour <= (endTime < startTime ? 23 : endTime); hour++) {
        timeSelect.appendChild(createOption(hour, '00'));
        timeSelect.appendChild(createOption(hour, '30'));
    }

    // Hvis det går over midnat (kun fredag og lørdag)
    if (endTime < startTime) {
        for (let hour = 0; hour <= endTime; hour++) {
            timeSelect.appendChild(createOption(hour, '00'));
            timeSelect.appendChild(createOption(hour, '30'));
        }
    }
}

function createOption(hour, minute) {
    const option = document.createElement('option');
    const formattedHour = hour.toString().padStart(2, '0');
    option.value = `${formattedHour}:${minute}`;
    option.textContent = `${formattedHour}:${minute}`;
    return option;
}


// bestilling af gavekort

document.getElementById('giftCardForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Forhindrer standardformularindsendelse

    // Hent brugernes input
    const giftCardAmount = document.getElementById('giftCardAmount').value;
    const customerName = document.getElementById('customerName').value;
    const customerEmail = document.getElementById('customerEmail').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    // Bekræftelse og logning af data (kan erstattes med API-kald til betalingsgateway)
    alert(`Takket for din bestilling! \n
    Beløb: DKK ${giftCardAmount} \n
    Kunde: ${customerName} \n
    E-mail: ${customerEmail} \n
    Betalingsmetode: ${paymentMethod}`);

    // Tilføj integration med betalingssystem her, det har vi ikke valgt at gøre
});