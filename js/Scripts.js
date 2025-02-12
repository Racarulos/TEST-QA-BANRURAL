let randomNumber = Math.round(Math.random() * 100); // Los numeros que daba no eran enteros y unicamente daban numeros del 1 al 10

const ATTEMPS = 10; //Los intentos son 10 no 5
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi'); // Falto colocar el punto
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {

  let userGuess = guessField.value;

  if(userGuess != '' && Number.isInteger(Number(userGuess))){ //Se agrego validacion para que no entre si no es entero el numero ingresado

    if(guessCount === 1) {
      guesses.textContent = 'Número aleatorio anterior: ';
    }
    guesses.textContent += userGuess + ' ';

    if(guessCount === ATTEMPS) { //El resultado de perder es si la cuenta de intentos es igual a los intentos permitidos
      lastResult.textContent = '!!!Pérdistes!!!';
      lastResult.style.backgroundColor = 'red'; // El color de perder el correcto es rojo
      lowOrHi.textContent = '';
      setGameOver();
    } else if(userGuess == randomNumber) { //El resultado no es guessCount === ATTEMPS si no es a la entrada del usuario sea igual a randomNumber
      lastResult.textContent = 'Felicitaciones! adivinaste el número'; 
      lastResult.style.backgroundColor = 'green'; //Se cambio el color a verde que es lo correcto
      setGameOver();
    } else {
      lastResult.textContent = 'Incorrecto! ';
      lastResult.style.backgroundColor = 'black'; // El color correcto debe de ser negro
      if(userGuess < randomNumber) {
        lowOrHi.textContent = 'El número es mayor!'; 
      } else if(userGuess > randomNumber) {
        lowOrHi.textContent = 'El número es menor!'; 
    }
  }

  guessCount++;

  }else if(userGuess === ''){ //Se agrego mensaje para valores que son igual a vacio

    lastResult.textContent = 'Ingrese un valor.';
    lastResult.style.backgroundColor = 'black';

  }else{ //Mensaje para valores que no son validos

    lastResult.textContent = 'Ingrese un valor valido, recuerde que unicamente son números enteros.';
    lastResult.style.backgroundColor = 'black';

  }
  guessField.value = '';
  guessField.focus();

}

guessSubmit.addEventListener('click',checkGuess) // Falto colocar mayuscula a la palabra event

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Comienza un nuevo juego';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame); // Falto colocar mayuscula a la palabra event
}



function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for(let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.round(Math.random() * 100); //Se cambio ya que solo iniciaba en 1 el numero aleatorio
}