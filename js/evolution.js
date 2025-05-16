
document.addEventListener("DOMContentLoaded", () => {
  const timelineContainer = document.getElementById("timeline-container");
  const template = document.getElementById("milestone-template");

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