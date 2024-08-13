'use strict'

let filterByType = function () {
    let acceptableTypeData = ['string', 'number', 'boolean']
    let arrayOfValues = []
    if (acceptableTypeData.find((element) => element === arguments[0]) === undefined) {
        throw 'Недопустимый тип данных';
    } else {
        for (let i = 1; i < arguments.length; i++) {
            if (typeof (arguments[i]) === arguments[0]) {
                arrayOfValues.push(arguments[i])
            }
        }
        console.log(arrayOfValues)
    }
}

try {
    filterByType('string', 12, 'hello', true, 233, 'how are you')
} catch (ex) {
    console.log(ex)
}
