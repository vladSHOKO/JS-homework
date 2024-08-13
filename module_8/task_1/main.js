'use strict'

let code = prompt('Введи код для выполнения');

try {
    eval(code)
}
catch (ex){
    console.log('При выполнении кода произошла ошибка: ', ex)
}