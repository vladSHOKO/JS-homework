"use strict"

let list = document.body.getElementsByClassName('tasksList')[0]
let textArea = document.body.getElementsByClassName('textarea')[0]
let button = document.body.getElementsByClassName('addingButton')[0]


function addTask() {
    try {
        checkTextArea();
        list.appendChild(document.createElement("li")).innerHTML = textArea.value;
        createListenerForLowerElement();
    } catch (ex) {
        alert(ex)
    }

}

function checkTextArea() {
    if (document.querySelector('input').value === '') {
        throw 'Пустое поле задачи'
    }
}

function createListenerForLowerElement() {
    let elements = document.querySelectorAll("li")
    elements[elements.length - 1].addEventListener("click", function () {
        elements[elements.length - 1].classList.toggle('crossOut')
    })
}

function addElementListenerForNewTask() {
    let listElements = document.querySelectorAll("li")
}

function addEventListenersForAllList() {
    let listElements = document.querySelectorAll("li")

    for (let i = 0; i < listElements.length; i++) {
        listElements[i].addEventListener("click", function () {
            listElements[i].classList.toggle('crossOut')
        })
    }
}


button.addEventListener("click", addTask);
addEventListenersForAllList()
