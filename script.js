window.addEventListener("scroll", function() {
    let header = this.document.getElementById("header-nav");
    header.classList.toggle("sticky", window.scrollY > 0)
})

let video = document.querySelectorAll('video');
video.forEach(play => play.addEventListener('click', () =>{
    play.classList.toggle('active');
    if (play.paused) {
        play.play();
    } else {
        play.pause()
        play.currentTime = 0;
    }
}))

function closevideo(videoElement) {
    videoElement.classList.remove('active');
    videoElement.pause();
    videoElement.currentTime = 0;
}

let closeTimes = document.getElementById("closetimes");
closeTimes.addEventListener('click', function() {
    let activeVideo = document.querySelector('video.active');
    if (activeVideo) {
        closevideo(activeVideo);
    }
});
