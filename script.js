const moods = {
  "Motivated": [
    { quote: "Yes! You're on fire today!", task: "Finish your top priority in the next 30 minutes." },
    { quote: "Crushing it! Keep going.", task: "Write down 3 wins from today." }
  ],
  "Lazy": [
    { quote: "Nope. Maybe later.", task: "Do one tiny task to feel better." },
    { quote: "You might as well take a nap.", task: "Stand up, stretch, and drink water." }
  ],
  "Neutral": [
    { quote: "You’re on track… probably.", task: "Review your to-do list for today." },
    { quote: "Thinking about work ≠ working.", task: "Start a timer for 10 minutes and work." }
  ],
  "Playful": [
    { quote: "Coffee first, productivity later.", task: "Grab a drink, then knock out 1 task." },
    { quote: "Stop hiding from your to-do list.", task: "Pick the easiest task and do it now." }
  ]
};

function checkProductivity() {
  const moodEl = document.getElementById("mood");
  const responseEl = document.getElementById("response");
  const taskEl = document.getElementById("task");

  responseEl.style.opacity = 0;
  taskEl.style.opacity = 0;
  moodEl.style.opacity = 0;

  setTimeout(() => {
    const moodNames = Object.keys(moods);
    const randomMood = moodNames[Math.floor(Math.random() * moodNames.length)];
    const moodOptions = moods[randomMood];
    const randomOption = moodOptions[Math.floor(Math.random() * moodOptions.length)];

    moodEl.innerText = `Mood: ${randomMood}`;
    responseEl.innerText = randomOption.quote;
    taskEl.innerText = `💡 Task: ${randomOption.task}`;

    moodEl.style.opacity = 1;
    responseEl.style.opacity = 1;
    taskEl.style.opacity = 1;
  }, 300);
}

checkProductivity();
