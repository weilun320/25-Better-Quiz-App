// Array of correct answers
const correctAnswers = [
  "tokyo",
  "man-city",
  "blue",
  "batman",
  "mark-zuckerberg"
];

let score = 0;

// Check for correct answers
function checkAnswer() {
  // Reset score to 0
  score = 0;
  // Loop through each questions' answer
  for (let i = 1; i <= 5; i++) {
    const answers = document.querySelectorAll(`input[name="question-${i}"]`);

    setFeedbackMessage(answers, i);
  }

  let scoreMessage;

  // Set score message
  switch(score) {
    case 1:
      scoreMessage = `<span class="fw-bold text-primary">Poor</span> 👎🏻. Your score is <span class="fw-bold text-primary">${score}</span>/5.`;
      break;
    case 2:
      scoreMessage = `<span class="fw-bold text-primary">Fair</span> 👌🏻. Your score is <span class="fw-bold text-primary">${score}</span>/5.`;
      break;
    case 3:
      scoreMessage = `<span class="fw-bold text-primary">Average</span> 👍🏻. Your score is <span class="fw-bold text-primary">${score}</span>/5.`;
      break;
    case 4:
      scoreMessage = `<span class="fw-bold text-primary">Good</span> 😎. Your score is <span class="fw-bold text-primary">${score}</span>/5.`;
      break;
    case 5:
      scoreMessage = `<span class="fw-bold text-primary">Excellent</span> 🤩! Your score is <span class="fw-bold text-primary">${score}</span>/5.`;
      break;
    default:
      scoreMessage = `<span class="fw-bold text-primary">Terrible</span> 😭. Your score is <span class="fw-bold text-primary">${score}</span>/5.`;
      break;
  }

  document.getElementById("score").innerHTML = scoreMessage;
}

// Set feedback message for each question
function setFeedbackMessage(answers, counter) {
  // Loop through each answer
  for (let i = 0; i < answers.length; i++) {
    const message = document.getElementById(`answer-${counter}`);
    message.classList.remove("text-success", "text-danger");

    // Check if user selected an answer and the answer is correct
    if (answers[i].checked && answers[i].value === correctAnswers[counter - 1]) {
      message.classList.add("text-success");
      message.innerHTML = "😀 Correct";
      // Add score by 1
      score++;
      return;
    }
    // Check if user selected an answer but the answer is wrong
    else if (answers[i].checked && answers[i].value !== correctAnswers[counter - 1]) {
      message.classList.add("text-danger");
      message.innerHTML = "😥 Wrong";
      return;
    }
    // User did not select an answer
    else {
      message.classList.add("text-danger");
      message.innerHTML = "Please select an answer";
    }
  }
}

// Reset user's selection, feedback message and score
function resetAll() {
  for (let i = 1; i <= 5; i++) {
    const answers = document.querySelectorAll(`input[name="question-${i}"]`);
    const message = document.getElementById(`answer-${i}`);

    resetSelection(answers);
    message.classList.remove("text-success", "text-danger");
    message.innerHTML = "";
    document.getElementById("score").innerHTML = "";
    score = 0;
  }
}

// Uncheck all radio buttons
function resetSelection(answers) {
  for (const answer of answers) {
    answer.checked = false;
  }
}