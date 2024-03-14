"use strict";
let score = 20;
let highScore = 0;
let number = Math.trunc(Math.random() * 20 + 1);

const showMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // When there is no ' input '.
  if (!guess) {
    showMessage(" Enter a number to input field. ");
  }
  // When player wins.
  else if (guess === number) {
    showMessage(" Found. ");
    // document.querySelector('.message').textContent = ' Found. ';
    document.querySelector(" .container ").style.backgroundColor = " #60b348 ";
    document.querySelector(".btn ").style.backgroundColor = "#37BC9B ";
    document.querySelector(".number").textContent = number;
    document.querySelector(".number ").style.backgroundColor = "#37BC9B ";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  // When guess is not equal to random number.
  else if (guess !== number) {
    if (score > 1) {
      showMessage(
        guess > number ? " Lower number... " : " Kinda... Low number ... "
      );

      score--;
      document.querySelector(" .score ").textContent = score;
    }
  } else {
    document.querySelector(".message ").textContent = " Try. ";
    document.querySelector(" .score ").textContent = 0;
  }
});
