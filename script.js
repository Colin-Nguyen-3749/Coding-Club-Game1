console.log('JavaScript file is linked correctly.');

const button = document.getElementById('presser');
const body = document.body;
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A1FF33'];
let colorIndex = 0;
let score = 0;

let currentLetter = letters[Math.floor(Math.random() * letters.length)];
button.textContent = currentLetter;

button.addEventListener('keydown', playGame);

function playGame(event) {
    const keyPressed = event.key;
    body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length
    if (keyPressed.toUpperCase() === currentLetter.toUpperCase()) {
        score++;
        console.log(`Correct! Score: ${score}`);
    } else {
        console.log(`Wrong! Score: ${score}`);
    }
    currentLetter = letters[Math.floor(Math.random() * letters.length)];
    button.textContent = currentLetter;
};
