const lazyVideos = document.querySelectorAll(".lazy-video");

const options = {
  root: null,
  rootMargin: "0px 0px 200px 0px", // Load when 200px before entering viewport
  threshold: 0.5, // Load when 50% of the element is visible
};

const loadVideo = (entry) => {
  if (entry.isIntersecting) {
    const video = entry.target;
    video.src = video.dataset.src;
    video.load(); // Start loading the video
    observer.unobserve(video); // Stop observing this element
  }
};

const observer = new IntersectionObserver(loadVideo, options);

lazyVideos.forEach((video) => observer.observe(video));
