function heroCarousel() {
  $(".hero-slider").slick({
    dots: true,
    draggable: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    autoplaySpeed: 4000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToShow: 1,
          centerPadding: "0rem",
        },
      },
    ],
  });
}

function carousel() {
  $(".collection-slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    autoplaySpeed: 3000,
    autoplay: false,
    centerMode: true,
    centerPadding: "30rem",
    // responsive
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          centerPadding: "12rem",
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          centerPadding: "10rem",
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          centerPadding: "0rem",
        },
      },
    ],
  });
}

export { carousel, heroCarousel };
