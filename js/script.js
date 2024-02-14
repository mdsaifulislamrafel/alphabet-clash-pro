function handleKeyboardButtonPress(event) {
    const playerPress = event.key;
    if(playerPress === 'Escape') {
        gameOver();
    }

    const currentAlphabet = document.getElementById('current-alphabet');
    const alphabet = currentAlphabet.innerText;
    const expectAlphabet = alphabet.toLowerCase();


    if (expectAlphabet === playerPress) {
        const currentScore = getTextScoreValueById('current-score');
        const newScore = currentScore + 1;
        setElementValueById('current-score', newScore);

        removeBackgroundById(expectAlphabet);
        continueGame();

    } else {
        const currentLife = getTextScoreValueById('current-life');
        const lostLife = currentLife - 1;
        setElementValueById('current-life', lostLife);
        if (lostLife === 0) {
            gameOver();
        }
    }
}

document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame() {
    const alphabet = getRandomAAlphabet();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    setBackgroundById(alphabet)
}

function play() {
    hideElementById('home-screen');
    hideElementById('score');
    showElementById('play-ground');
    setElementValueById('current-life', 5);
    setElementValueById('current-score', 0);
    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('score');
    const finalScore = getTextScoreValueById('current-score');
    setElementValueById('final-score', finalScore);
    const currentAlphabet = getElementById('current-alphabet');
    removeBackgroundById(currentAlphabet);
}