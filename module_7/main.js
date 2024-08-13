function Transport(height, weight, length, speed) {
    this.height = height;
    this.weight = weight;
    this.length = length;
    this.speed = speed;

    this.turnOn = function () {
        console.log('yayayayayay...')
    }
}

Transport.prototype.turnOn = function () {
    alert('bgggggg...')
}

function Car() {
    Transport.apply(this, arguments);
}

function Plane() {
    Transport.apply(this, arguments);
}

function Ship() {
    Transport.apply(this, arguments);
}

let car = new Car(100, 100, 100, 100);
let ship = new Ship(200, 200, 200, 200);
let plane = new Plane(300, 300, 300, 300);