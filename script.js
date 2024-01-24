const sliderModule = (function () {
    const privateState = {
      slider: document.querySelector('.slider'),
      sliderItems: document.querySelectorAll('.slider img'),
      currentIndex: 0,
      isSliding: false,
      sliderInterval: null, 
    };
  
    function nextSlide() {
      stopAutoSlide();
      if (!privateState.isSliding) {
        privateState.isSliding = true;
        privateState.currentIndex = (privateState.currentIndex + 1) % privateState.sliderItems.length;
        slideTransition();
      }
    }
  
    function prevSlide() {
      stopAutoSlide();  
      if (!privateState.isSliding) {
        privateState.isSliding = true;
        privateState.currentIndex = (privateState.currentIndex - 1 + privateState.sliderItems.length) % privateState.sliderItems.length;
        slideTransition();
      }
    }
  
    function slideTransition() {
      const nextTranslate = -privateState.currentIndex * 100;
      privateState.slider.style.transform = `translateX(${nextTranslate}%)`;
      setTimeout(() => {
        privateState.isSliding = false;
        startAutoSlide();  
      }, 500);
    }
  
    function handleKeyDown(event) {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    }
  
    function startAutoSlide() {
      privateState.sliderInterval = setInterval(nextSlide, 3000);
    }
  
    function stopAutoSlide() {
      clearInterval(privateState.sliderInterval);
    }

    function workAutoSlide() {
        privateState.isAutoSlidePaused = !privateState.isAutoSlidePaused;
        const button = document.getElementById('workAutoSlide');
        
        if (privateState.isAutoSlidePaused) {
          stopAutoSlide();
          button.textContent = 'Возобновить автослайд';
        } else {
          startAutoSlide();
          button.textContent = 'Остановить автослайд';
        }
      }
  
    document.addEventListener('keydown', handleKeyDown);
  
    startAutoSlide();
  
    return {
      nextSlide,
      prevSlide,
      workAutoSlide,
    };
})();
