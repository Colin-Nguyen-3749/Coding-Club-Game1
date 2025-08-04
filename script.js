console.log('JavaScript file is linked correctly.');

const button = document.getElementById('button');
const body = document.body;
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const gameOver = document.getElementById('game-over');
const playerScore = document.getElementById('score');
const highScore = document.getElementById('high-score');
const restartButton = document.getElementById('restart-button');
const timer = document.getElementById('game-timer');
const timerInterval = setInterval(updateTimer, 1000);

let score = 0;
let gameEnd = false; 
let highestScore = 0;

let timeLeft = 12; //12 seconds


let currentLetter = letters[Math.floor(Math.random() * letters.length)];
button.textContent = currentLetter;

button.addEventListener('keydown', playGame);


function updateTimer() {
    timer.textContent = `${timeLeft}s`;
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        displayGameOver();
    } else {
        timeLeft--;
    }
};

function playGame(event) {

    highScore.textContent = highestScore;
    const keyPressed = event.key;
    
    document.addEventListener('keydown', (e) => {
        button.classList.add('clicked');
    });

    if (keyPressed.toUpperCase() === currentLetter.toUpperCase()) {
        button.classList.add('correct');
        setTimeout(() => {
            button.classList.remove('correct');
        }, 200);
        score++;
        playerScore.textContent = score;
        console.log(`Correct! Score: ${score}`);

    } else {
        button.classList.add('wrong');
        setTimeout(() => {
            button.classList.remove('wrong');
        }, 200);
        gameEnd = true;
        console.log(`Wrong! Score: ${score}`);
        displayGameOver();

    }
    currentLetter = letters[Math.floor(Math.random() * letters.length)];
    button.textContent = currentLetter;

    document.addEventListener('keyup', (e) => {
        button.classList.remove('clicked');

    });
    
};

function displayGameOver() {
    console.log('eureka');
    button.disabled = true;
    gameOver.style.display = 'block';
    restartButton.addEventListener('click', restartGame);
    if (score > highestScore) { 
        console.log('eureka');
        highestScore = score;
        highScore.textContent = highestScore;
    }
};

function restartGame() {
    const gameOver = document.getElementById('game-over');
    gameOver.style.display = 'none';

    button.disabled = false;
    timeLeft = 12;
    timer.textContent = `${timeLeft}s`;
    score = 0;
    playerScore.textContent = score;
    gameEnd = false;
    playGame();
    let currentLetter = letters[Math.floor(Math.random() * letters.length)];
    button.textContent = currentLetter;
    
};

