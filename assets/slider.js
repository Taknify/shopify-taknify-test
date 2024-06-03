document.addEventListener("DOMContentLoaded", function () {
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const slider = document.querySelector(".swiper-wrapper");
  const slides = document.querySelectorAll(".swiper-slide");

  let slidesToShow = window.innerWidth >= 998 ? 3 : 1;
  let slideNumber = 0;
  let maxSlideNumber;

  const updateSlideCount = () => {
    let slideWidth = slides[0].offsetWidth;
    maxSlideNumber = Math.ceil(slides.length / slidesToShow) - 1;
    slider.style.transform = `translateX(-${
      slideNumber * slideWidth * slidesToShow
    }px)`;
  };

  window.addEventListener("resize", () => {
    slidesToShow = window.innerWidth >= 998 ? 3 : 1;
    updateSlideCount();
  });

  updateSlideCount();

  const updateSlidePosition = () => {
    let slideWidth = slides[0].offsetWidth;
    slider.style.transform = `translateX(-${
      slideNumber * slideWidth * slidesToShow
    }px)`;
  };

  right.addEventListener("click", () => {
    if (slideNumber < maxSlideNumber) {
      slideNumber++;
      updateSlidePosition();
    } else {
      slideNumber = 0;
      updateSlidePosition();
    }
  });

  left.addEventListener("click", () => {
    if (slideNumber > 0) {
      slideNumber--;
      updateSlidePosition();
    } else {
      slideNumber = maxSlideNumber;
      updateSlidePosition();
    }
  });
});
