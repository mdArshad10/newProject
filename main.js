import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { carousel, heroCarousel } from "./slider.js";

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

window.addEventListener("load", (e) => {
  heroCarousel();

  const mm = gsap.matchMedia();

  showMenu("nav-toggle", "nav-menu");

  mm.add("(min-width: 768px", () => {
    centerLogoMove(0, 0, 0.2, 0, true);
    navbarMove(1);
    carousel();
    featureSectionMovement();
    ContentMovement(
      "#personalised-styles > h2, #personalised-styles > p, #personalised-styles > ol",
      "#personalised-styles",
      "center",
      "bottom"
    );
    ContentMovement(
      "#quick-fit-solution> h2, #quick-fit-solution> ol",
      "#quick-fit-solution",
      "center",
      "bottom"
    );
  });

  mm.add("(max-width: 768px)", () => {
    centerLogoMove(0, 0, 0.25, 0, true);
    navbarMove(1);
    carousel();
    featureSectionMovement();
    ContentMovement(
      "#personalised-styles > h2, #personalised-styles > p, #personalised-styles > ol",
      "#personalised-styles",
      "center",
      "bottom"
    );
    ContentMovement(
      "#quick-fit-solution> h2, #quick-fit-solution> ol",
      "#quick-fit-solution",
      "center",
      "bottom"
    );
  });
});
$(window).on("load", function (e) {
  // const endTime = performance.now() / 1000; // when document is ready
  // const executionTime = startTime - endTime;
  // gsap.registerPlugin(ScrollTrigger);
  // console.log(`the execution time ${executionTime}`);
  // mm.add("(max-width: 1118px)", () => {
  //   centerLogoMove(executionTime, 0.3, "-40vw", false);
  //   navbarMove(executionTime);
  //   contentSlider();
  //   showMenuMovement();
  //   carousel();
  // });
  // mm.add("(max-width:700px)", () => {
  //   centerLogoMove(executionTime, 0.3, "-36vw", false);
  //   navbarMove(executionTime);
  //   showMenuMovement();
  //   contentSlider();
  //   carousel();
  // });
});
// });

function navbarMove(et) {
  gsap.to("header", {
    height: "4rem",
    duration: 2,
    ease: "ease.out",
  });
}

function centerLogoMove(top, left, scale, et, fullscreen) {
  gsap.to(".center-element", {
    transform: "translate(-40%, 0)",
    top,
    left,
    delay: et,
    scale,
    duration: 2,
    onStart: tagLineMove(et),
    onComplete: navbarMenuMovement(fullscreen),
  });
}

function tagLineMove(et) {
  gsap.to(".psm-work-experience", {
    // x: "-42vw",
    // y: 5,
    opacity: 0,
    scale: 0.2,
    delay: et,
    duration: 2,
  });
}

// animation done ✅
function featureSectionMovement() {
  gsap.from(".feature-section>h2", {
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

  gsap.from(".feature-blocks> .feature-single-block", {
    x: -100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.4,
    scrollTrigger: {
      trigger: ".feature-section",
      scroller: "body",
      markers: true,
      scrub: 1,
      start: "10vh center",
      end: "600vh center",
      toggleActions: "play reverse play reverse",
    },
  });
}

// animation done ✅
function ContentMovement(
  targetElement,
  triggerElement,
  topStart = "center",
  topEnd = "center"
) {
  gsap.from(`${targetElement}`, {
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.4,
    scrollTrigger: {
      trigger: `${triggerElement}`,
      scrollTarget: "body",
      markers: true,
      // start: "top center",
      start: `${topStart} center`,
      // end: "bottom center",
      end: `${topEnd} center`,
      toggleActions: "play reverse play reverse",
    },
  });
}

function navbarMenuMovement() {
  const dropdown__item = document.querySelectorAll(".dropdown__item");
  gsap.to(".nav__toggle", {
    delay: 2.25,
    opacity: 1,
  });
  gsap.to(".nav__menu", {
    delay: 1,
    display: "flex",
  });
  gsap.from(dropdown__item, {
    duration: 0.5,
    // opacity: fullscreen ? 1 : 0,
    y: 10,
    stagger: 0.1,
    delay: 1,
  });
}

function showMenuMovement() {
  gsap.to(".nav__toggle", {
    display: "block",
    duration: 0.5,
    delay: 4,
  });
}

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
