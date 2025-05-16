const powerToggle = document.getElementById('powerToggle');
const audio = document.querySelector('audio');

powerToggle.addEventListener('change', function() {
    if (this.checked) {
        // Power is ON
        console.log('Power is ON');
        audio.volume = 0.04;
        audio.play(); // Start playing audio
    } else {
        // Power is OFF
        console.log('Power is OFF');
        audio.pause(); // Pause audio
        audio.currentTime = 0; // Reset audio to start
    }
});