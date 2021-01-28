'use strict';

const guessElement = document.querySelector('.js-guess');
const tryElement = document.querySelector('.js-try');
const clueElement = document.querySelector('.js-clue');
const attempsElement = document.querySelector('.js-attemps');

const result = getRandomNumber(100);
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(result);

function startGame() {
  const gameNumber = parseInt(guessElement.value);
  console.log(gameNumber);

  if (gameNumber === result) {
    clueElement.value = ' Has ganado campeona!!';
  } else if (gameNumber > result) {
    clueElement.value = ' Demasiado alto';
  } else if (gameNumber < result) {
    clueElement.value = ' Demasiado bajo';
  } else {
    clueElement.value = ' El número debe estar entre 1 y 100';
  }
}
tryElement.addEventListener('click', startGame);
