function continueGame () {
    // console.log("Continue");
    const alphabet = getRandomAAlphabet();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    setBackgroundById(alphabet)
}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}