'use strict';
const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = localStorage.getItem('highScore') || 0;
document.querySelector('.highscore').textContent = highScore;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  }
  if (score > 1) {
    if (guess === secretNumber) {
      document.querySelector('.message').textContent = 'Correct Number.';
      //When player wins, change background to green
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '300px';
      document.querySelector('.number').textContent = score;
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
        localStorage.setItem('highScore', highScore);
      }
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'Too High!';
      document.querySelector('.score').textContent = --score;
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'Too Low!';
      document.querySelector('.score').textContent = --score;
    }
  } else {
    document.querySelector('.message').textContent = 'You Lost the Game!';
  }
});
document.querySelector('.again').addEventListener('click', function () {
  location.reload();
});
