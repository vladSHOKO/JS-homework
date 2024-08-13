function getMonth(date) {
    let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',];
    return months[date.getMonth()];
}

function getDay(date) {
    let days = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье',];
    return days[date.getDay()]
}

function getHour(date) {
    let hour = date.getHours()
    if (hour === 1 || hour === 21) {
        return 'час';
    } else if ((hour >= 2 && hour <= 4) || (hour >= 22 && hour <= 24)) {
        return 'часа';
    } else if (hour >= 5 && hour <= 20) {
        return 'часов';
    }
}

function getMinutes(date) {
    let minutes = date.getMinutes();
    let words = ['минута', 'минуты', 'минут',];
    if (minutes % 10 === 1 && minutes !== 11) {
        return words[0];
    } else if (minutes % 10 >= 2 && minutes % 10 <= 4 && minutes !== 12 && minutes !== 13 && minutes !== 14) {
        return words[1];
    } else {
        return words[2];
    }
}

function getSeconds(date) {
    let seconds = date.getSeconds();
    let words = ['секунда', 'секунды', 'секунд',];
    if (seconds % 10 === 1 && seconds !== 11) {
        return words[0];
    } else if (seconds % 10 >= 2 && seconds % 10 <= 4 && seconds !== 12 && seconds !== 13 && seconds !== 14) {
        return words[1];
    } else {
        return words[2];
    }
}

function showTime(date) {
    return 'Сегодня ' + date.getDate() + ' ' + getMonth(date) + ' ' + date.getFullYear() + ' года, ' + getDay(date) + ', ' + date.getHours() + ' ' + getHour(date) + ' ' + date.getMinutes() + ' ' + getMinutes(date) + ' ' + date.getSeconds() + ' ' + getSeconds(date)
}

var date = new Date();
alert(showTime(date))