import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {carousel,contentSlider} from './slider.js';

gsap.registerPlugin(ScrollTrigger);

console.log("this is for testing purposes");

// scrolling effect
function scrollingEffect() {
  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}

// adding the new gsap property
gsap.set(".nav", {
  height: "80vh",
  backgroundColor: "black",
  justifyContent: "space-between",
});

gsap.set(".nav__menu", {
  display: "none",
});

gsap.set("#center_logos", {
  scale: 1,
});

const tl = gsap.timeline();

const navbarMove = gsap.to(".nav", {
  height: "10vh",
  delay: 2,
  duration: 2,
  justifyContent: "space-evenly",
});

const centerLogoMove = gsap.to(".nav__logo", {
  x: "-38vw",
  y: 6,
  delay: 2,
  scale: 0.3,
  duration: 2,
});

const tagLineMove = gsap.to("#tag-line", {
  opacity: 0,
  delay: 2,
  duration: 2,
});


// animation done
function featureSectionMovement() {
  gsap.from(".feature-section>h1 , .feature-section>.feature-blocks", {
    y: 200,
    opacity: 0,
    scale: 0.2,
    duration: 0.5,

    scrollTrigger: {
      trigger: ".feature-section",
      scroller: "body",
      markers: true,
      start: "10vh center",
      end: "600vh center",
      toggleActions: "play reverse play none",
    },
  });
}

// animation done
function craftingContentMovement() {
  gsap.from("#crafting-content", {
    y: 200,
    opacity: 0,
    scale: 0,
    duration: 0.5,
    // delay: 6,
    scrollTrigger: {
      trigger: "#crafting-content",
      scroller: "body",
      // markers: true,
      start: "-600vh center",
      end: "bottom center",
      toggleActions: "play reverse play none",
    },
  });
}

// animation done
function settingStandardMovement() {
  gsap.from("#setting-standard-content", {
    y: 100,
    opacity: 0,
    scale: 1,
    duration: 0.5,
    // delay: 6,
    scrollTrigger: {
      trigger: "#setting-standard-content",
      scroller: "body",
      // markers: true,
      start: "-100vh center",
      end: "bottom center",
      toggleActions: "play reverse play none",
    },
  });
}

// animation done
function buildingTimelessMovement() {
  gsap.from("#building-timeless-content", {
    y: 100,
    opacity: 0,
    scale: 1,
    duration: 0.5,
    // delay: 6,
    scrollTrigger: {
      trigger: "#building-timeless-content",
      scroller: "body",
      // markers: true,
      start: "-100vh center",
      end: "bottom center",
      toggleActions: "play reverse play none",
    },
  });
}

function navbarMenuMovement() {
  const menuChild = document.querySelector(".nav__menu");
  const dropdown__item = document.querySelectorAll(".dropdown__item");
  gsap.to(menuChild, {
    delay: 3,
    display: "flex",
  });
  gsap.from(dropdown__item, {
    duration: 0.5,
    opacity: 0,
    y: 10,
    stagger: 0.1,
    delay: 4,
  });
}

function stickerMovement() {
  // gsap.from("#sticker", {
  //   y: -200,
  //   scale: 0.5,
  //   opacity: 0.4,
  // });
}

// adding the delay
function mainContentMovement() {
  gsap.from(".main-content-container", {
    y: 1000,
    opacity: 1,
    delay: 2,
  });
}

// moving the background image
function mainPageMovement() {
  gsap.from("#main", {
    y: 100,
    opacity: 1,
    duration: 2,
    // backgroundPosition: "0% 50%",
    delay: 2,
  });
}

function carouselMovement() {
  gsap.from("#page2>.slider, #page2>.page2-heading", {
    y: 200,
    opacity: 0,
    scale: 0.2,
    duration: 0.5,
    stagger: 1,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      // markers: true,
      start: "30% center",
      end: "80% center",
      toggleActions: "play reverse play none",
    },
  });
}

scrollingEffect();

stickerMovement();
contentSlider();
carousel();

featureSectionMovement();
craftingContentMovement();
settingStandardMovement();
buildingTimelessMovement();
carouselMovement();
mainContentMovement();

