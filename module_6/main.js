function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.regDate = function () {
        return new Date();
    }
}

function UserList() {
    this.users = [];
    this.add = function (User) {
        this.users.push([User.firstName, User.lastName, User.regDate()]);
    }
    this.getAllUsers = function () {
        let index;
        for (index = 0; index < this.users.length; ++index) {
            alert('Фамилия : ' + this.users[index][0] + ' \nИмя : ' + this.users[index][1] + ' \nВремя регистрации: ' + this.users[index][2]) // Рассмотреть другой вариант цикла для перебора массива users
        }
    }
}

function cutFirstName(string) {
    return string.match(/.+ /gm)
}

function cutLastName(string) {
    return string.match(/ .+/gm)
}

let userList = new UserList()

while (true) {
    let userFullName = prompt('Введите ваши фамилию и имя')
    if (userFullName === null) {
        break;
    }
    let user = new User(cutFirstName(userFullName), cutLastName(userFullName))
    userList.add(user)
}

userList.getAllUsers()