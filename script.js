let song = document.getElementById('song');

let playBtn = document.getElementById('play-btn');

let progress = document.getElementById('progress');

// when the metadata of the song is loaded eventListener is handled
song.addEventListener('loadedmetadata', () => {
    progress.max = song.duration;
    progress.value = song.currentTime;
});


// adding onclick function to handle play and pause events
function playPause() {
    if (playBtn.classList.contains('fa-play')) {
        song.play();
        playBtn.classList.remove('fa-play');
        playBtn.classList.add('fa-pause');
    } else {
        song.pause();
        playBtn.classList.remove('fa-pause');
        playBtn.classList.add('fa-play');
    }
};


// for matching the progress bar with current time of the song
if (song.play) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

// handling the onchage event for the progress bar with song current Time
progress.addEventListener('change', () => {
    song.play();
    song.currentTime = progress.value;
    playBtn.classList.remove('fa-play');
    playBtn.classList.add('fa-pause');
})