import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { carousel, heroCarousel } from "./slider.js";

gsap.registerPlugin(ScrollTrigger);


window.addEventListener("load", (e) => {
  heroCarousel();

  carousel();

  const mm = gsap.matchMedia();

  showMenu("nav-toggle", "nav-menu");

  mm.add("(max-width: 768px)", () => {
    centerLogoMove(0, 0, 0.5, 0, false, 25);

    navbarMove(1);
    carousel();

    ContentMovement(
      "#personalised-styles > h2, #personalised-styles > p, #personalised-styles > ol",
      "#personalised-styles",
      "top",
      "bottom"
    );
    ContentMovement(
      "#quick-fit-solution> h2, #quick-fit-solution> ol, #quick-fit-solution > a ",
      "#quick-fit-solution",
      "top",
      "bottom"
    );
  });

  mm.add("(min-width: 769px) and (max-width: 1119px)", () => {
    centerLogoMove(0, 0, 0.2, 0, false);
    navbarMove(1, true);
    carousel();
  });

  mm.add("(min-width: 1120px) and (max-width:1919px)", () => {
    centerLogoMove(0, 0, 0.2, 0, true);
    navbarMove(1, true);
    carousel();
  });

  mm.add("(min-width: 1920px)", () => {
    centerLogoMove("0.2rem", 0, 0.2, 0, true);
  });

  navbarMove(1);

  ContentMovement(
    "#personalised-styles > h2, #personalised-styles > p, #personalised-styles > ol",
    "#personalised-styles",
    "top",
    "bottom"
  );
  ContentMovement(
    "#quick-fit-solution> h2, #quick-fit-solution> ol, #quick-fit-solution > a ",
    "#quick-fit-solution",
    "top",
    "bottom"
  );
});

function navbarMove(et, isLargeScreen = false) {
  gsap.to("header", {
    height: "5rem",
    duration: 2,
    ease: "ease.out",
  });
}

function centerLogoMove(top, left, scale, et, fullscreen, translateX = 38) {
  if (fullscreen) {
    gsap.to(".center-element", {
      transform: `translate(-${translateX}%, 0)`,
      top,
      left,
      delay: et,
      scale,
      duration: 2,
      onStart: tagLineMove(et),
      onComplete: navbarMenuMovement(fullscreen),
    });
  } else {
    gsap.to(".center-element", {
      transform: `translate(-${translateX}%, 0)`,
      top,
      left,
      delay: et,
      scale,
      duration: 2,
      onStart: tagLineMove(et),
      onComplete: navbarMenuMovementInPhone(),
    });
  }
}

// center logo move in phone
function navbarMenuMovementInPhone() {
  const dropdown__item = document.querySelectorAll(".dropdown__item");
  gsap.to(".nav__toggle", {
    delay: 2.25,
    opacity: 1,
  });
  gsap.to(".nav__menu", {
    delay: 1,
    display: "flex",
    // opacity: 1,
  });
  gsap.from(dropdown__item, {
    duration: 0.5,

    y: 10,
    stagger: 0.1,
    delay: 1,
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
function ContentMovement(
  targetElement,
  triggerElement,
  topStart = "top",
  topEnd = "center"
) {
  gsap.from(`${targetElement}`, {
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
      trigger: `${triggerElement}`,
      scrollTarget: "body",
      // start: "top center",
      start: `${topStart} center`,
      // end: "bottom center",
      // markers:true,
      end: `${topEnd} center`,
      toggleActions: "play reverse play reverse",
    },
  });
}

function navbarMenuMovement(isFullScreen) {
  const dropdown__item = document.querySelectorAll(".dropdown__item");
  gsap.to(".nav__toggle", {
    delay: 2.25,
    opacity: 1,
  });
  gsap.to(".nav__menu", {
    delay: 1,
    display: "flex",
    opacity: 1,
  });
  gsap.from(dropdown__item, {
    duration: 0.5,

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
