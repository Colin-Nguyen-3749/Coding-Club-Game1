console.log('JavaScript file is linked correctly.');

const button = document.getElementById('button');
const body = document.body;
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let score = 0;

let currentLetter = letters[Math.floor(Math.random() * letters.length)];
button.textContent = currentLetter;

button.addEventListener('keydown', playGame);

function playGame(event) {
    const keyPressed = event.key;
    
    document.addEventListener('keydown', (e) => {
        button.classList.add('clicked');
    });

    if (keyPressed.toUpperCase() === currentLetter.toUpperCase()) {
        console.log('eureka');
        button.classList.add('correct');
        setTimeout(() => {
            button.classList.remove('correct');
        }, 200);
        score++;
        console.log(`Correct! Score: ${score}`);

    } else {
        button.classList.add('wrong');
        
        console.log(`Wrong! Score: ${score}`);
    }
    currentLetter = letters[Math.floor(Math.random() * letters.length)];
    button.textContent = currentLetter;

    document.addEventListener('keyup', (e) => {
        button.classList.remove('clicked');
    });



    
};
