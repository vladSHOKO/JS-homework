function getRandomInt(minNumber, maxNumber) {
    minNumber = Math.ceil(minNumber);
    maxNumber = Math.floor(maxNumber);
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}

var intendedNumber = getRandomInt(0, 1000);
var answer;

while (!(answer === null)) {
    answer = parseInt(prompt('Введи число'))
    if (!isNaN(answer)) {
        if (answer > intendedNumber) {
            alert('Меньше');
        } else if (answer < intendedNumber) {
            alert('Больше');
        } else if (answer === intendedNumber) {
            alert('Правильно');
        }
    } else {
        alert('Введи число');
    }
}