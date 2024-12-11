"use strict;"
document.getElementById('dartBookingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const dartDate = document.getElementById('dartDate').value;
    const dartTime = document.getElementById('dartTime').value;
    const dartDuration = document.getElementById('dartDuration').value;
    const dartPlayers = document.getElementById('dartPlayers').value;

    if (dartDate && dartTime && dartDuration && dartPlayers) {
        alert(`Du har booket en dartbane den ${dartDate} kl. ${dartTime} for ${dartPlayers} spillere i ${dartDuration} minutter!`);
    } else {
        alert('Udfyld venligst alle felter.');
    }
});

document.getElementById('karaokeBookingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const karaokeDate = document.getElementById('karaokeDate').value;
    const karaokeTime = document.getElementById('karaokeTime').value;
    const karaokeDuration = document.getElementById('karaokeDuration').value;
    const karaokeParticipants = document.getElementById('karaokeParticipants').value;

    if (karaokeDate && karaokeTime && karaokeDuration && karaokeParticipants) {
        alert(`Du har booket et karaoke-rum den ${karaokeDate} kl. ${karaokeTime} for ${karaokeParticipants} deltagere i ${karaokeDuration} minutter!`);
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
        endTime = 1; // 02:00 næste dag
    } else { // Alle andre dage
        startTime = 15; // 15:00
        endTime = 22; // 23:00
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
