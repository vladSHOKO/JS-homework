let users = {
    user1: 'password1',
    user2: 'password2',
    user3: 'password3',
};

let inputLogin = prompt('login')
let inputPassword = prompt('password')


function checkUser(obj, inputLogin, inputPassword) {
    for (let prop in obj) {
        if (prop === inputLogin && obj[prop] === inputPassword) {
            alert('Success')
            break;
        }
    }
}

checkUser(users, inputLogin, inputPassword);

