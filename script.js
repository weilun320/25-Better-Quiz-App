// Array of correct answers
const correctAnswers = [
  "tokyo",
  "man-city",
  "blue",
  "batman",
  "mark-zuckerberg"
];

// Check for correct answers
function checkAnswer() {
  // Loop through each questions' answer
  for (let i = 1; i <= 5; i++) {
    const answers = document.querySelectorAll(`input[name="question-${i}"]`);

    setFeedbackMessage(answers, i);
  }
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