console.log('JavaScript file is linked correctly.');

const button = document.getElementById('presser');
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let score = 0;

let currentLetter = letters[Math.floor(Math.random() * letters.length)];
button.textContent = currentLetter;

button.addEventListener('keydown', playGame);

function playGame(event) {
    const keyPressed = event.key;
    if (keyPressed.toUpperCase() === currentLetter.toUpperCase()) {
        score++;
        console.log(`Correct! Score: ${score}`);
    } else {
        console.log(`Wrong! Score: ${score}`);
    }
    currentLetter = letters[Math.floor(Math.random() * letters.length)];
    button.textContent = currentLetter;
};
