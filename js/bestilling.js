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