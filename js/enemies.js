// Adding click event listeners to all enemy cards to toggle the description visibility
document.querySelectorAll('.enemy-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});

// Selecting all enemy videos to enable play and pause on hover
document.querySelectorAll('.enemy-video').forEach(video => {
  const wrapper = video.parentElement; 

  // When the mouse enters the wrapper,it start playing the video
  wrapper.addEventListener('mouseenter', () => {
    video.play();
  });

  // When the mouse leaves, it pauses the video and reset to the start
  wrapper.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0; 
  });
});

// Toggle button for showing/hiding the YouTube reaction section
const toggleBtn = document.getElementById('toggle-youtube-btn');
const youtubeSection = document.getElementById('youtube-section-container');

if (toggleBtn && youtubeSection) {
  toggleBtn.addEventListener('click', () => {
    if (youtubeSection.style.display === 'none') {
      youtubeSection.style.display = 'block';
      toggleBtn.textContent = 'Hide Gamers Reactions';
    } else {
      youtubeSection.style.display = 'none';
      toggleBtn.textContent = 'Show Gamers Reactions';
    }
  });
}