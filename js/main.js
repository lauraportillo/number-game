'use strict';
// variables

const guessElement = document.querySelector('.js-guess');
const tryElement = document.querySelector('.js-try');
const clueElement = document.querySelector('.js-clue');
const attempsElement = document.querySelector('.js-attemps');
const resetElement = document.querySelector('.js-reset');
let keystrokes = 0;

const result = getRandomNumber(100);
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// funciones
function handleStartGame() {
  const gameNumber = parseInt(guessElement.value);

  if (isNaN(gameNumber)) {
    clueElement.value = 'That is not a number...';
    clueElement.classList.add('clueTextColorError');
  } else if (gameNumber < 1 || gameNumber > 100) {
    clueElement.value = 'Choose please between 1 and ​100';
    clueElement.classList.add('clueTextColorError');
  } else if (gameNumber > result) {
    clueElement.value = 'Too high';
    clueElement.classList.add('clueTextColorError');
  } else if (gameNumber < result) {
    clueElement.value = 'Too low';
    clueElement.classList.add('clueTextColorError');
  } else if (gameNumber === result) {
    clueElement.value = 'You win, you are a master!!';
    clueElement.classList.add('clueTextColor');
    clueElement.classList.remove('clueTextColorError');
    //STOP GAME
    tryElement.disabled = true;
    guessElement.disabled = true;
  }
}

function handleCountAttemps() {
  keystrokes = keystrokes + 1;
  attempsElement.value = 'Number of attemps: ' + keystrokes;
}

// EJECUCION: se ejecuta al cargar
tryElement.addEventListener('click', handleStartGame);
tryElement.addEventListener('click', handleCountAttemps);
console.log(result);

function reset() {
  location.reload();
}
resetElement.addEventListener('click', reset);
