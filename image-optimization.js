// JavaScript code
const lazyImages = document.querySelectorAll(".lazy-loading");

const loadImages = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove("lazy");
      observer.unobserve(img);
    }
  });
};

const observer = new IntersectionObserver(loadImages, {
  root: document.querySelector("body"), // Adjust the root element as needed
  threshold: 0.5, // Image considered "in view" when 50% visible
});

lazyImages.forEach((img) => observer.observe(img));
