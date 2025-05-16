// adding a list of games with titles and ratings
const games = [
  { title: "Resident Evil", rating: 7.5 },
  { title: "Resident Evil 2 (Remake)", rating: 9.0 },
  { title: "Resident Evil 3 (Remake)", rating: 7.0 },
  { title: "Resident Evil 4", rating: 10 },
  { title: "Resident Evil 5", rating: 8.0 },
  { title: "Resident Evil 6", rating: 6.5 },
  { title: "Resident Evil 7: Biohazard", rating: 8.5 },
  { title: "Resident Evil Village", rating: 8.8 },
];

// Getting the table body element 
const tableBody = document.getElementById("ratings-table");

// Looping through each game and creating a table rows
games.forEach(game => {
  const row = document.createElement("tr");
  const titleCell = document.createElement("td");
  titleCell.textContent = game.title;
  
  const ratingCell = document.createElement("td");
  const barContainer = document.createElement("div");
  barContainer.className = "rating-bar-container";

  const barFill = document.createElement("div");
  barFill.className = "rating-bar-fill";
  // Setting bar width based on rating (out of 10)
  barFill.style.width = `${(game.rating / 10) * 100}%`;

  barContainer.appendChild(barFill);
  ratingCell.appendChild(barContainer);

  // Creatign stars to represent the rating visually
  const starsCell = document.createElement("td");
  const starCount = Math.round(game.rating / 2); // Convert 10-point rating to 5-star scale
  starsCell.innerHTML = `<span class="stars">${"★".repeat(starCount)}${"☆".repeat(5 - starCount)}</span>`;
  row.appendChild(titleCell);
  row.appendChild(ratingCell);
  row.appendChild(starsCell);

  // Adding the row to the table body
  tableBody.appendChild(row);
});
const ratingSlider = document.getElementById('rating');
const emojiSpan = document.getElementById('emoji');
const form = document.getElementById('simple-review-form');
const reviewsDiv = document.getElementById('reviews');

// Updating emoji when slider changes
ratingSlider.addEventListener('input', () => {
  const val = parseInt(ratingSlider.value);
  if (val <= 2) {
    emojiSpan.textContent = '😾'; // it means the user is not happy
  } else if (val == 3) {
    emojiSpan.textContent = '😸'; // it means the user is neutral
  } else if (val >= 4) {
    emojiSpan.textContent = '😻'; // it means the user is very happy
  }
});

// Handling form submission to add new review
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page reload
  const name = document.getElementById('name').value.trim();
  const game = document.getElementById('game').value;
  const rating = parseInt(ratingSlider.value);
  const reviewText = document.getElementById('review').value.trim();

  // Creating review container
  const review = document.createElement('div');
  review.innerHTML = `
    <strong>${name}</strong> on <em>${game}</em><br>
    <div style="font-size:1.5em;">${['😾','😸','😻'][rating-1]}</div>
    <p>${reviewText}</p>
  `;

  // Appending review to reviews section
  reviewsDiv.appendChild(review);
  
  // Resetting form and emoji
  form.reset();
  document.getElementById('emoji').textContent = '😸';
});