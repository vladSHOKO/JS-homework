var number = 0;
var sum = 0;

while (!(number === null)) {
    number = prompt();
    if (!isNaN(number)) {
        sum += +number;
    }
}

alert(sum);
