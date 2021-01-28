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
// escuchar el boton prueba

function startGame() {
  const gameNumber = guessElement.value;
  console.log(gameNumber);
}

tryElement.addEventListener('click', startGame);
