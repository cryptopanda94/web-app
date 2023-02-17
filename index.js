const slider = document.querySelector('.slider');
const slides = Array.from(slider.children);
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange the slides side by side
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

// Move the slides to the left or right
const moveToSlide = (slider, currentSlide, targetSlide) => {
  slider.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

// When the prev/next button is clicked, move the slides accordingly
prevBtn.addEventListener('click', () => {
  const currentSlide = slider.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1];
  moveToSlide(slider, currentSlide, prevSlide);
});

nextBtn.addEventListener('click', () => {
  const currentSlide = slider.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling || slides[0];
  moveToSlide(slider, currentSlide, nextSlide);
});
