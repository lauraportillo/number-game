'use strict';

const guessElement = document.querySelector('.js-guess');
const tryElement = document.querySelector('.js-try');
const clueElement = document.querySelector('.js-clue');
const attempsElement = document.querySelector('.js-attemps');

// generar un número random para iniciar el juego
const result = getRandomNumber(100);
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(result);

// escuchar el botón prueba
function startGame() {
  const gameNumber = guessElement.value;
  console.log(gameNumber);

  //escribir las condiciones para el numero que haya introducido la usuaria

  if (gameNumber === result) {
    clueElement.innerHTML = ' Has ganado campeona!!';
  } else if (gameNumber > result) {
    clueElement.innerHTML = ' Demasiado alto';
  } else if (gameNumber < result) {
    clueElement.innerHTML = ' Demasiado bajo';
  } else {
    clueElement.innerHTML = ' El número debe estar entre 1 y 100';
  }
}
tryElement.addEventListener('click', startGame);

/*
  Actualizar el contador de intentos cada vez que la jugadora pruebe
  */
