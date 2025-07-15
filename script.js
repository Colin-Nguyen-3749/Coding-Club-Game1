console.log('JavaScript file is linked correctly.');

const button = document.getElementById('presser');

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let score = 0;

button.addEventListener('keydown', startGame);

function startGame(event) {
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    button.textContent = randomLetter;
    console.log(randomLetter);
    const keyPressed = event.key;
    if (keyPressed.toUpperCase() === randomLetter.toUpperCase()) {
        score++;
    }
    console.log(`Score: ${score}`);
};

