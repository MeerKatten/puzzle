function generateQuestion() {
  const num1 = Math.floor(Math.random() * 15) + 10;
  const num2 = Math.floor(Math.random() * 15) + 10;
  const answer = num1 * num2;

  return {
    question: `${num1} x ${num2}`,
    answer,
  };
}

let currentQuestion = generateQuestion();
let timer;
let timeRemaining = 20;

function startTimer() {
  timer = setInterval(() => {
    document.getElementById('timer').textContent = timeRemaining;
    timeRemaining--;

    if (timeRemaining < 0) {
      clearInterval(timer);
      currentQuestion = generateQuestion();
      startTimer();
    }
  }, 1000);
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('answer').value);

  if (userAnswer === currentQuestion.answer) {
    document.getElementById('question').textContent = currentQuestion.question;
    document.getElementById('answer').value = '';
    console.log('Here is the next clue');
    clearInterval(timer);
    timeRemaining = 20;
    startTimer();
    currentQuestion = generateQuestion();
  } else {
    console.log('Incorrect answer');
  }

  return false;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('question').textContent = currentQuestion.question;
  startTimer();
});
