
document.addEventListener("DOMContentLoaded", () => {
  const timelineContainer = document.getElementById("timeline-container");
  const template = document.getElementById("milestone-template");

  const milestones = [
  {
    year: "1996",
    title: "Resident Evil Released",
    description: "The original survival horror game launched.",
    image: "../media/orgre.jpg",
    details: "Introduced players to the Spencer Mansion, tank controls, and item-based puzzles."
  },
  {
    year: "2005",
    title: "Resident Evil 4",
    description: "Revolutionized the series with over-the-shoulder action.",
    image: "../media/re4.jpg",
    details: "Leon S. Kennedy returns in a mission to save the president's daughter, with intense combat and cinematic gameplay."
  },
  {
    year: "2017",
    title: "Resident Evil 7",
    description: "A bold shift to first-person horror.",
    image: "../media/re bio.jpg",
    details: "Introduced a new protagonist and tone, embracing a gritty and terrifying direction."
  },
  {
    year: "2021",
    title: "Resident Evil Village",
    description: "Expanded the lore with supernatural horror themes.",
    image: "../media/re village.jpg",
    details: "A continuation of Ethan Winters' story with new villains and intense atmospheric design."
  }
];
  // Looping through each milestone in our array
  milestones.forEach(milestone => {
    // Making a copy of the template content so we can customize it
    const clone = template.content.cloneNode(true);
    
    // ing the main milestone element within the clone
    const milestoneEl = clone.querySelector(".milestone");
    
    // Setting the heading to include the year and title
    clone.querySelector("h3").textContent = `${milestone.year} — ${milestone.title}`;
    // Setting the description summary
    clone.querySelector(".summary").textContent = milestone.description;
    // Setting the image source and alt text for accessibility
    const img = clone.querySelector("img");
    img.src = milestone.image;
    img.alt = milestone.title;
    // Filling in the detailed info paragraph
    clone.querySelector(".milestone-details p").textContent = milestone.details;

    // Adding a click event to toggle more details on or off
    milestoneEl.addEventListener("click", () => {
      // Toggling a class to expand or collapse the details
      milestoneEl.classList.toggle("expanded");
    });

    // Finally, adding the customized clone to the timeline container
    timelineContainer.appendChild(clone);
  });
});
// adidng aList of classic horror games with details
const classicHorrorGames = [
  {
    title: "Dead Space",
    image: "../media/dead.jpg",
    description: "Borrowed over-the-shoulder camera & horror pacing from RE4.",
    video: "https://www.youtube.com/embed/dkSlYGOEjEM?si=CMjfDEXfWwrwoFAE",
    quote: "Resident Evil crawled so Dead Space could run."
  },
  {
    title: "The Evil Within",
    image: "../media/evil.jpg",
    description: "Directed by Shinji Mikami, this game revives classic RE dread.",
    video: "https://www.youtube.com/embed/mbBu75SSDAE?si=OJDYXmn7IQn_g8Ec",
    quote: "It's the modern Resident Evil 4 in disguise."
  },
  {
    title: "Silent Hill",
    image: "../media/silent.jpg",
    description: "Inspired by RE's success, but focused more on psychological horror.",
    video:"https://www.youtube.com/embed/uoxG-DXSSac",
    quote: "Without RE's survival horror success, SH wouldn't have existed."
  },
  {
    title: "The Last of Us",
    image: "../media/lastofus.jpg",
    description: "Inherits RE's mix of emotional storytelling and tension.",
    video: "https://www.youtube.com/embed/NpLoBc5PcQ4?si=xrvOvNYQiENE_vHb",
    quote: "Ellie and Joel are like the Leon and Claire of the apocalypse."
  }
];

// When the page is fully loaded, it cretaes cards
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("legacy-grid");
  const template = document.getElementById("legacy-template");

  // Looping through each game and creating a friendly card for it
  classicHorrorGames.forEach(game => {
    const gameCard = template.content.cloneNode(true);

    // Filling in the image, title, description, video, and quote
    gameCard.querySelector("img").src = game.image;
    gameCard.querySelector("img").alt = game.title;
    gameCard.querySelector("h4").textContent = game.title;
    gameCard.querySelector(".desc").textContent = game.description;
    gameCard.querySelector(".video").src = game.video;
    gameCard.querySelector(".quote").textContent = game.quote;

    // Adding our new game card to the page
    container.appendChild(gameCard);
  });
});