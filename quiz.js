const button = document.getElementById("submit-answer");
function checkAnswer() {
  const feedback = document.getElementById("feedback");
  const correctAnswer = "4";
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (!selectedOption) {
    feedback.textContent = "Please select an answer.";
    return;
  }
  const userAnswer = selectedOption.value;
  //Comparing answers
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again.";
  }
}

button.addEventListener("click", checkAnswer);
