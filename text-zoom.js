// 1. Pobieramy wszystkie potrzebne elementy z DOM

const btnIncrease = document.querySelector('.bigger');
const btnDecrease = document.querySelector('.smaller');
const text = document.querySelector('p');

// 1b. Określamy potrzebne dane

let textSize = 20; // poczatkowa wielkość dla font-size dla p

// 1c. Parametry początkowe 

text.style.fontSize = textSize + "px";

// 3. Określenie akcji - napisanie funkcji - najlepiej aby występowała przed nasłuchiwaniem.

function textIncrease() {
    textSize++;
    text.style.fontSize = textSize + "px";
}
function textDecrease() {
    textSize--;
    text.style.fontSize = textSize + "px";
}

// 2. Ustawienie nasłuchiwania (addEventListener) na przyciskach, jako kliknięcie "click". 

btnIncrease.addEventListener('click', textIncrease);
btnDecrease.addEventListener('click', textDecrease);
