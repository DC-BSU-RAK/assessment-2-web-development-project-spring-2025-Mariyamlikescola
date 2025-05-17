// adding questions for the quiz, each with text and multiple options
const questions = [
  {
    text: "How do you handle danger?",
    options: [
      { text: "Stay calm and analyze", value: "calm" },
      { text: "Fight head-on", value: "brave" },
      { text: "Use stealth", value: "cunning" },
      { text: "Help others", value: "compassionate" }
    ],
  },
  {
    text: "What motivates you?",
    options: [
      { text: "Protecting loved ones", value: "protect" },
      { text: "Power and control", value: "power" },
      { text: "Fame and recognition", value: "fame" },
      { text: "Justice", value: "justice" }
    ],
  },
  {
    text: "Choose a skill:",
    options: [
      { text: "Marksmanship", value: "shooting" },
      { text: "Cunning plans", value: "cunning" },
      { text: "Physical strength", value: "strength" },
      { text: "Stealth", value: "stealth" }
    ],
  },
  {
    text: "Your friends see you as:",
    options: [
      { text: "Loyal and brave", value: "loyal" },
      { text: "Clever and sneaky", value: "cunning" },
      { text: "Resilient and tough", value: "resilient" },
      { text: "Compassionate and caring", value: "compassionate" }
    ],
  },
  {
    text: "Your ideal environment is:",
    options: [
      { text: "Urban city", value: "urban" },
      { text: "Remote wilderness", value: "wilderness" },
      { text: "Underground labs", value: "lab" },
      { text: "Futuristic facility", value: "futuristic" }
    ],
  }
];


// adding the character profiles, each with name, description, image, and traits
const characters = [
  {
    name: "Leon S. Kennedy",
    description: "Brave, resourceful, and quick-thinking. A dedicated police officer turned hero.",
    image: "https://i.pinimg.com/736x/6e/fd/38/6efd384cd44ec06d0015890cfe3712ab.jpg",
    traits: ["brave", "calm", "resilient", "loyal"]
  },
  {
    name: "Jill Valentine",
    description: "Skilled and determined, Jill is a master at combat and rescue operations.",
    image: "https://i.pinimg.com/736x/9f/f8/fc/9ff8fc35158844d547a234b6ff8628cb.jpg",
    traits: ["resilient", "cunning", "loyal"]
  },
  {
    name: "Ada Wong",
    description: "Mysterious, cunning, and independent. Always working her own agenda.",
    image: "https://i.pinimg.com/736x/95/5e/c1/955ec1985ce469894f1c2a537366236b.jpg",
    traits: ["cunning", "stealthy"]
  },
  {
    name: "Chris Redfield",
    description: "Heroic, strong-willed, and resilient. Fights to protect humanity.",
    image: "https://i.pinimg.com/736x/da/8c/fc/da8cfcec7bf6ec09749c7e0f2dc742a6.jpg",
    traits: ["brave", "resilient", "loyal"]
  },
  {
    name: "Albert Wesker",
    description: "Ruthless, cunning, and superhuman. A major villain with a dark agenda.",
    image: "https://i.pinimg.com/736x/1c/ec/74/1cec7409edc2f5c93ad5a4ded215de8b.jpg",
    traits: ["villain", "cunning", "power"]
  },
  {
    name: "HUNK",
    description: "Silent, deadly, and highly skilled operative. The legendary soldier.",
    image: "https://i.pinimg.com/736x/51/23/27/5123278f59c98d540cb013e4e60daa57.jpg",
    traits: ["brave", "stealthy"]
  },
  {
    name: "Uroboros",
    description: "A monstrous bioweapon embodying chaos and destruction.",
    image: "https://i.pinimg.com/736x/98/8f/7b/988f7bb76af3d2c366b64e72f90d72e2.jpg",
    traits: ["villain", "chaotic"]
  },
  {
    name: "Nicholai Ginovaef",
    description: "Cunning and ruthless, an operative with a dark past.",
    image: "https://i.pinimg.com/736x/84/ec/ba/84ecbaf768d907feea5f98d225e0aa94.jpg",
    traits: ["villain", "cunning"]
  },
  {
    name: "Claire Redfield",
    description: "Resilient, compassionate, and determined to save others.",
    image: "https://i.pinimg.com/736x/d5/8e/7f/d58e7fcd912af2a84ee0f4f3acc7c8ed.jpg",
    traits: ["resilient", "loyal", "compassionate"]
  },
  {
    name: "Sheva Alomar",
    description: "Loyal and brave partner of Chris Redfield, skilled in combat.",
    image: "https://i.pinimg.com/736x/c0/c6/5f/c0c65fac88ec565bc63bb9a465d75b56.jpg",
    traits: ["brave", "loyal"]
  }
];


// Initializing an empty array to store user answers
let answers = [];
// Keeping track of the current question index
let currentQuestion = 0;
// Functionfor staritng the quiz, hiding intro and showing questions
function startQuiz() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  showQuestion();
}
function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById('questionText').innerText = q.text;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';


  // Creating a button for each option
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.innerText = opt.text;
    btn.className = 'option-btn';
    btn.onclick = () => {
      answers.push(opt.value);
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    };
    optionsDiv.appendChild(btn);
  });
}
function showResult() {
  document.getElementById('quiz').style.display = 'none';
// Counting how many times each trait was selected
  const traitCount = {};
  answers.forEach(val => {
    traitCount[val] = (traitCount[val] || 0) + 1;
  });
// Find ingg the character with the highest total trait score
  let maxScore = -1;
  let matchedChar = null;
  characters.forEach(char => {
    let score = 0;
    for (const trait of char.traits) {
      score += traitCount[trait] || 0;
    }
    if (score > maxScore) {
      maxScore = score;
      matchedChar = char;
    }
  });


  // Displaying the matched character info
  document.getElementById('characterName').innerText = matchedChar.name;
  console.log("Character image URL:", matchedChar.image);
document.getElementById('characterImg').src = matchedChar.image;
  document.getElementById('characterImg').src = matchedChar.image;
  document.getElementById('characterImg').onerror = function () {
  this.src = '../media/default-character.jpg'; // Make sure this file exists
};


  document.getElementById('characterDesc').innerText = matchedChar.description;
  document.getElementById('result').style.display = 'block';
  launchConfetti();
}


// Function for restarting the quiz
function restartQuiz() {
  answers = [];
  currentQuestion = 0;
  document.getElementById('result').style.display = 'none';
  document.getElementById('intro').style.display = 'block';
}


function launchConfetti() {
  const container = document.getElementById('confetti');
  container.innerHTML = '';
  for (let i=0; i<100; i++) {
    const conf = document.createElement('div');
    conf.innerHTML = '🎉';
    conf.style.position = 'absolute';
    conf.style.fontSize = Math.random() * 20 + 10 + 'px';
    conf.style.left = Math.random() * 100 + '%';
    conf.style.top = Math.random() * -20 + '%';
    conf.style.transform = `rotate(${Math.random() * 360}deg)`;
    container.appendChild(conf);
    animateConfetti(conf);
  }
}
function animateConfetti(conf) {
  let y = parseFloat(conf.style.top);
  const fall = () => {
    y += Math.random() * 2 + 1;
    conf.style.top = y + '%';
    if (y < 110) {
      requestAnimationFrame(fall);
    } else {
      conf.remove();
    }
  };
  fall();
}
function scrollToQuiz() {
  document.getElementById("quizForm").scrollIntoView({ behavior: "smooth" });
}
