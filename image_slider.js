// image slider functionality page //

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

// wait for all DOM content to load, then call initializeSlider function
document.addEventListener("DOMContentLoaded", initalizeSlider);

// populates web browser with first image
function initalizeSlider() {
    // if we have slides, display it
    if(slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

// gets index of next slide we would like to go to
function showSlide(index) {
    // if we reach the end of our slides, reset the index
    if(index >= slides.length) {
        slideIndex = 0;
    }
    // if we're on first slide and hit previous button, go to end of index
    else if(index < 0) {
        slideIndex = slides.length - 1;
    }

    // access node list of slides, iterate through all of them
    slides.forEach(slide => {
        // remove class of display slide, so current picture isnt being displayed in next slide
        slide.classList.remove("displaySlide");
    });
    // access class list of next slide and display it
    slides[slideIndex].classList.add("displaySlide");
}

// handles moving to the previous slide
function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

// handles moving to the next slide
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}