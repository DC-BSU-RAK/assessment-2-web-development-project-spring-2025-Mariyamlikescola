// Selecting the character section
const section = document.querySelector('.characters-section');

// Creatign an Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  },
  { threshold: 0.1 }
);


observer.observe(section);

// Adding a hover event to play videos//
document.querySelectorAll('.character').forEach(char => {
  const video = char.querySelector('video');
  char.addEventListener('mouseenter', () => {
    if (video) {
      video.currentTime = 0;
      video.play();
    }
  });
  char.addEventListener('mouseleave', () => {
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  });
});