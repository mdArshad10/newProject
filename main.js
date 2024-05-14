import { gsap } from "gsap";
// import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { carousel, contentSlider } from "./slider.js";

$(document).ready(function (e) {
  console.log(e);
  gsap.registerPlugin(ScrollTrigger);
  const mm = gsap.matchMedia();

  const ts = e.timeStamp / 1000;

  showMenu("nav-toggle", "nav-menu");

  centerLogoMove(ts, 0.3, "-41.5vw", true);
  navbarMove(ts);
  carousel();

  mm.add("(max-width: 1118px)", () => {
    centerLogoMove(ts, 0.3, "-41.5vw", false);
    showMenuMovement();
  });

  mm.add("(max-width:700px)", () => {
    centerLogoMove(ts, 0.3, "-36vw", false);
    showMenuMovement();
  });

  mm.add("(max-width:450px)", () => {
    centerLogoMove(ts, 0.3, "-31vw", false);
    showMenuMovement();
  });
});

// scrolling effect
// function scrollingEffect() {
//   const lenis = new Lenis();

//   lenis.on("scroll", ScrollTrigger.update);

//   gsap.ticker.add((time) => {
//     lenis.raf(time * 1000);
//   });

//   gsap.ticker.lagSmoothing(0);
// }

// function navbarMove(ts) {
//   gsap.to(".nav", {
//     height: "5.5rem",
//     delay: ts,
//     duration: 2,
//     onComplete: contentSlider(),
//   });
// }

function navbarMove(ts) {
  gsap.to("header", {
    height: "5.5rem",
    delay: ts,
    duration: 2,
    onComplete: contentSlider(),
  });
}

function centerLogoMove(ts, scale, xPosition, fullscreen) {
  gsap.to(".psm-logo", {
    x: xPosition,
    y: 5,
    delay: ts,
    scale,
    duration: 2,
    onStart: tagLineMove(ts),
    onComplete: navbarMenuMovement(ts + 1, fullscreen),
  });
}

function tagLineMove(ts) {
  gsap.to(".psm-work-experience", {
    x: "-42vw",
    y: 5,
    opacity: 0,
    scale: 0.2,
    // display: "none",
    delay: ts,
    duration: 2,
  });
}

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

function navbarMenuMovement(ts, fullscreen) {
  const menuChild = document.querySelector(".nav__menu");
  const dropdown__item = document.querySelectorAll(".dropdown__item");
  gsap.set("header", {
    justifyContent: "normal",
  });
  gsap.to(menuChild, {
    delay: ts,
    display: "flex",
  });
  gsap.from(dropdown__item, {
    duration: 0.5,
    // opacity: fullscreen ? 1 : 0,
    y: 10,
    stagger: 0.1,
    delay: ts,
  });
}

function showMenuMovement() {
  gsap.to(".nav__toggle", {
    display: "block",
    duration: 0.5,
    delay: 4,
  });
}

// adding the delay
// function mainContentMovement() {
//   gsap.from(".main-content-container", {
//     y: 1000,
//     opacity: 1,
//     delay: 2,
//   });
// }

// moving the background image
// function mainPageMovement() {
//   gsap.from("#main", {
//     y: 100,
//     opacity: 1,
//     duration: 2,
//     // backgroundPosition: "0% 50%",
//     delay: 2,
//   });
// }

// function carouselMovement() {
//   gsap.from("#page2>.slider, #page2>.page2-heading", {
//     y: 200,
//     opacity: 0,
//     scale: 0.2,
//     duration: 0.5,
//     stagger: 1,
//     scrollTrigger: {
//       trigger: "#page2",
//       scroller: "body",
//       start: "30% center",
//       end: "80% center",
//       toggleActions: "play reverse play none",
//     },
//   });
// }

/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    // Add show-menu class to nav menu
    nav.classList.toggle("show-menu");

    // Add show-icon to show and hide the menu icon
    toggle.classList.toggle("show-icon");
  });
};
