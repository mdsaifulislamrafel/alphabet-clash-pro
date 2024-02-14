function hideElementById(id) {
    const element = document.getElementById(id);
    element.classList.add('hidden');
}

function showElementById(id) {
    const element = document.getElementById(id);
    element.classList.remove('hidden');
}

function setBackgroundById (id) {
    const element = document.getElementById(id);
    element.classList.add('bg-orange-400');
}

function removeBackgroundById (id) {
    const element = document.getElementById(id);
    element.classList.remove('bg-orange-400');
}

function getTextScoreValueById (id) {
    const element = document.getElementById(id);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
}

function setElementValueById(id, value) {
    const element = document.getElementById(id);
    element.innerText = value;
}

function getElementById(id) {
    const element = document.getElementById(id);
    const value = element.innerText;
    return value;
}

function getRandomAAlphabet() {
    const alphabetsString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetsString.split('');

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;


}