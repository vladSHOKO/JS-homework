export function start() {
    function getRandomInt() {
        return Math.floor(Math.random() * (Math.floor(1000) - Math.ceil(1) + 1) + Math.ceil(1));
    }

    let countOfAttempts = 10;
    let number = getRandomInt();
    function game() {
        while (countOfAttempts !== 0) {
            answer = parseInt(prompt('Введи число'));
            if (answer === number) {
                alert('Правильно')
                break;
            } else if (answer > number) {
                alert(`Меньше. Количество попыток: ${--countOfAttempts}`)
            } else if (answer < number) {
                alert(`Больше. Количество попыток: ${--countOfAttempts}`)
            }
        }
        if (countOfAttempts === 0) {
            alert('Ты проиграл')
        } else {
            alert('Ты выиграл')
        }
    }
}
