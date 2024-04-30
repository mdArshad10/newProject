// import Swiper JS
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

function contentSlider() {
  const swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    slidesPerView: 1,
    infinite: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

function carousel() {
  $(document).ready(function () {
    $(".slider").slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 750,
      autoplaySpeed: 2500,
      infinite: true,
      autoplay: true,
      centerMode: true,
      centerPadding: "0",
    });
  });
}




export { carousel , contentSlider};
