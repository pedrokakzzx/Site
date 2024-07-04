// JavaScript para tornar o vídeo fullscreen ao ser clicado
const video = document.getElementById('myVideo');

video.addEventListener('click', function() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

video.addEventListener('dblclick', function() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
    }
});
