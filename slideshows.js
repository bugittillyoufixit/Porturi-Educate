let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const playButton = document.getElementById('play-button');
const thumbnail = document.getElementById('thumbnail');
const video = document.getElementById('video');
const videoContainer = document.getElementById('video-container');
const closeButton = document.getElementById('close-button');

function showSlides(n) {
    if (n >= slides.length) {
        slideIndex = slides.length - 1;
    } else if (n < 0) {
        slideIndex = 0;
    } else {
        slideIndex = n;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";


    updateButtonState();
}

function changeSlide(n) {
    showSlides(slideIndex + n);
}

function currentSlide(n) {
    showSlides(n - 1);
}

function updateButtonState() {
    if (slideIndex === 0) {
        prevButton.style.display = "none";
    } else {
        prevButton.style.display = "block";
    }

    if (slideIndex === 15) {
        nextButton.style.display = "none";
    } else {
        nextButton.style.display = "block";
    }
}

function confirmLeave() {
    if (confirm("Sunteți sigur că doriți sa abandonați cursul curent? Veți fi re-direcționat către cursuri.")) {
        window.location.href = 'courses.html';
    }
}

closeButton.addEventListener('click', confirmLeave);


window.onbeforeunload = function() {
    return "Sunteți sigur că doriți sa abandonați cursul curent? Veți fi re-direcționat către cursuri.";
};


showSlides(slideIndex);
