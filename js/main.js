'use strict';
// variables

const guessElement = document.querySelector('.js-guess');
const tryElement = document.querySelector('.js-try');
const clueElement = document.querySelector('.js-clue');
const attempsElement = document.querySelector('.js-attemps');
let keystrokes = 0;

const result = getRandomNumber(100);
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// funciones
function handleStartGame() {
  const gameNumber = parseInt(guessElement.value);

  if (isNaN(gameNumber)) {
    clueElement.value = ' Te has liaoooo! Te he dicho un número...';
    clueElement.classList.add('clueTextColorError');
  } else if (gameNumber < 1 || gameNumber > 100) {
    clueElement.value = ' Dijimos que eligieras entre 1 y 100! Sin trampis ;)';
    clueElement.classList.add('clueTextColorError');
  } else if (gameNumber > result) {
    clueElement.value = ' Demasiado alto';
    clueElement.classList.add('clueTextColorError');
  } else if (gameNumber < result) {
    clueElement.value = ' Demasiado bajo';
    clueElement.classList.add('clueTextColorError');
  } else if (gameNumber === result) {
    clueElement.value = ' Has ganado!! Oleeee, oleeeee y oleeeee';
    clueElement.classList.add('clueTextColor');
    clueElement.classList.remove('clueTextColorError');
    //STOP GAME
    tryElement.disabled = true;
    guessElement.disabled = true;
  }
}

function handleCountAttemps() {
  keystrokes = keystrokes + 1;
  attempsElement.value = 'Número de intentos: ' + keystrokes;
}

// EJECUCION: se ejecuta al cargar
tryElement.addEventListener('click', handleStartGame);
tryElement.addEventListener('click', handleCountAttemps);
console.log(result);
