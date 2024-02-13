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


function getRandomAAlphabet() {
    const alphabetsString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetsString.split('');
    // console.log(alphabets);

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;


}