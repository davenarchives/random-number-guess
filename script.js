let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const resetButton = document.getElementById('resetButton');

function checkGuess() {
    const userGuess = parseInt(guessInput.value);
    attempts++;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        message.style.color = 'red';
    } else if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number in ${attempts} attempts!`;
        message.style.color = 'green';
        guessButton.disabled = true;
        resetButton.style.display = 'inline-block';
    } else {
        const difference = Math.abs(userGuess - randomNumber);
        if (difference <= 5) {
            message.textContent = "You're very close! " + (userGuess < randomNumber ? 'Try a bit higher.' : 'Try a bit lower.');
            message.style.color = 'orange';
        } else if (userGuess < randomNumber) {
            message.textContent = 'Too low! Try again.';
            message.style.color = 'blue';
        } else {
            message.textContent = 'Too high! Try again.';
            message.style.color = 'blue';
        }
    }

    attemptsDisplay.textContent = `Attempts: ${attempts}`;
    guessInput.value = '';
    guessInput.focus();
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    message.textContent = '';
    attemptsDisplay.textContent = 'Attempts: 0';
    guessButton.disabled = false;
    resetButton.style.display = 'none';
    guessInput.value = '';
    guessInput.focus();
}

guessButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', resetGame);
guessInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

