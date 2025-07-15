console.log('JavaScript file is linked correctly.');

const button = document.getElementById('presser');

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const score = 0;

button.addEventListener('click', startGame);

function startGame() {
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    button.textContent = randomLetter;
    console.log(randomLetter);
}

