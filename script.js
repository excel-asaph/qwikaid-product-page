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

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Validate form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === "" || email === "" || message === "") {
            alert("All fields are required.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Display success message
        alert("Thank you for contacting us. We will get back to you shortly.");
        form.reset(); // Reset the form
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});

