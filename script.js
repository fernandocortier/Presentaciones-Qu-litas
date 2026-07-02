(function () {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const previousButton = document.querySelector('[data-action="prev"]');
  const nextButton = document.querySelector('[data-action="next"]');
  const counter = document.querySelector(".slide-counter");
  let currentSlide = 0;

  function updateSlide(index) {
    currentSlide = Math.max(0, Math.min(index, slides.length - 1));

    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === currentSlide;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
    });

    previousButton.disabled = currentSlide === 0;
    nextButton.disabled = currentSlide === slides.length - 1;
    counter.value = `${currentSlide + 1} / ${slides.length}`;
    counter.textContent = counter.value;
    document.title = `${slides[currentSlide].dataset.slideTitle} | Reporte Trimestral Quálitas`;
  }

  function goToNextSlide() {
    updateSlide(currentSlide + 1);
  }

  function goToPreviousSlide() {
    updateSlide(currentSlide - 1);
  }

  previousButton.addEventListener("click", goToPreviousSlide);
  nextButton.addEventListener("click", goToNextSlide);

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
      event.preventDefault();
      goToNextSlide();
    }

    if (event.key === "ArrowLeft" || event.key === "PageUp") {
      event.preventDefault();
      goToPreviousSlide();
    }

    if (event.key === "Home") {
      event.preventDefault();
      updateSlide(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      updateSlide(slides.length - 1);
    }
  });

  updateSlide(0);
})();
