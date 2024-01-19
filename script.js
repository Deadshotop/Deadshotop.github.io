const slider = document.querySelector('.slider');
const sliderItems = document.querySelectorAll('.slider img');
let currentIndex = 0;
let isSliding = false;

function nextSlide() {
    if (!isSliding) {
        isSliding = true;
        currentIndex = (currentIndex + 1) % sliderItems.length;
        slideTransition();
    }
}

function prevSlide() {
    if (!isSliding) {
        isSliding = true;
        currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
        slideTransition();
    }
}

function slideTransition() {
    const nextTranslate = -currentIndex * 100;
    slider.style.transform = `translateX(${nextTranslate}%)`;
    setTimeout(() => {
        isSliding = false;
    }, 500);
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        prevSlide();
    } else if (event.key === 'ArrowRight') {
        nextSlide();
    }
});

setInterval(nextSlide, 3000);
