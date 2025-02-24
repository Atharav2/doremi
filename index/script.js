document.getElementById('acceptButton').addEventListener('click', function() {
    document.getElementById('response').textContent = "Yay! I'm so happy! Cutei Doremi !!";
});

// Play the song when the button is clicked
document.getElementById('playSongButton').addEventListener('click', function() {
    var audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer.paused) {
        audioPlayer.play();  // Play the song
        this.textContent = "Pause Song";  // Change button text to "Pause Song"
    } else {
        audioPlayer.pause();  // Pause the song
        this.textContent = "Play Song";  // Change button text to "Play Song"
    }
});
