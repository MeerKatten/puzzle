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
      timeRemaining = 20;
      currentQuestion = generateQuestion();
      document.getElementById('question').textContent = currentQuestion.question;
      startTimer();
    }
  }, 1000);
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('answer').value);

  if (userAnswer === currentQuestion.answer) {
    document.getElementById('message').textContent = 'Joskus täällä pystyi pingistäkin pelata, enään ei kannata mennä ovea pidemmälle.';
    document.getElementById('answer').value = '';
    clearInterval(timer);
    timeRemaining = 20;
    currentQuestion = generateQuestion();
    document.getElementById('question').textContent = currentQuestion.question;
    startTimer();
  } else {
    console.log('Incorrect answer');
  }

  return false;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('question').textContent = currentQuestion.question;
  startTimer();
});
