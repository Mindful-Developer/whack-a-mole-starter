const moles = document.querySelectorAll('.mole');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
let score = 0;
let gameInterval;

function randomMole() {
    moles.forEach(mole => {
        mole.classList.remove('active');
    });
    const randomIndex = Math.floor(Math.random() * moles.length);
    moles[randomIndex].classList.add('active');
}

function whackMole(event) {
    if (event.target.classList.contains('active')) {
        score++;
        scoreDisplay.textContent = score;
        event.target.classList.remove('active');
    }
}

moles.forEach(mole => {
    mole.addEventListener('click', whackMole);
});

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    gameInterval = setInterval(randomMole, 500);
    startButton.disabled = true;
    stopButton.disabled = false;
}

function stopGame() {
    clearInterval(gameInterval);
    moles.forEach(mole => {
        mole.classList.remove('active');
    });
    startButton.disabled = false;
    stopButton.disabled = true;
}

startButton.addEventListener('click', startGame);
stopButton.addEventListener('click', stopGame);
stopButton.disabled = true;