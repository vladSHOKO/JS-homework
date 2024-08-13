"use strict";

function addEditingButton() {
    let editButton = document.createElement("article")
    editButton.innerHTML = '<button> Edit </button>'
    document.body.append(editButton)

    editButton.addEventListener("click", function () {
        deleteEditingButton(editButton);
        deleteVersionList()
        addSaveAndCancelButtons()
        switchTextEditable()
    })
}

function addSaveAndCancelButtons() {
    let saveButton = document.createElement("article")
    saveButton.innerHTML = '<button> Save </button>'
    document.body.append(saveButton)

    let cancelButton = document.createElement("article")
    cancelButton.innerHTML = '<button> Cancel changes </button>'
    document.body.append(cancelButton)

    saveButton.addEventListener("click", function () {
        deleteSaveAndCancelButtons(saveButton, cancelButton);
        saveTextInLocalStorage()
        addEditingButton()
        addVersionList()
        switchTextEditable()

    })

    cancelButton.addEventListener("click", function () {
        deleteSaveAndCancelButtons(saveButton, cancelButton);
        addEditingButton()
        addVersionList()
        switchTextEditable()
        cancelChanges()
    })
}

function deleteEditingButton(editButton) {
    editButton.remove()
}

function deleteSaveAndCancelButtons(saveButton, cancelButton) {
    saveButton.remove()
    cancelButton.remove()
}

function switchTextEditable() {
    let textArea = document.querySelector(".textarea")
    textArea.toggleAttribute("contenteditable")
}

function saveTextInLocalStorage() {
    let time = new Date()
    let text = document.querySelector(".textarea")
    localStorage.setItem(time, text.innerHTML)
}

function addTextArea() {
    let div = document.querySelector(".textarea")
    let select = document.querySelector("select")

    if (localStorage.getItem(select.options[select.selectedIndex]) !== null) {
        div.innerHTML = localStorage.getItem(select.options[select.selectedIndex].text)
    } else {
        div.innerHTML = "<p>Разнообразный и богатый опыт начало повседневной работы по формированию позиции требуют определения и уточнения модели развития.\
         <p>С другой стороны начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач. \
         <p>Повседневная практика показывает, что сложившаяся структура организации играет важную роль в формировании форм развития."
    }
}

function cancelChanges() {
    let text = document.querySelector(".textarea")
    text.innerHTML = localStorage.text
}

function addVersionList() {
    let versionList = document.createElement("select")
    document.body.append(versionList)
    versionList.classList.add("select")
    addOptions()
    versionList.addEventListener("change", function () {
        let text = document.querySelector(".textarea")
        let select = document.querySelector("select")

        text.innerHTML = localStorage.getItem(select.options[select.selectedIndex].text)
    })
}

function addOptions() {
    for (let i = 0; i < localStorage.length; i++) {
        let select = document.querySelector(".select")
        let option = new Option(localStorage.key(i), i)
        select.options.add(option)
    }
}

function deleteVersionList() {
    let versionList = document.querySelector(".select")
    versionList.remove()
}

try {
    addEditingButton()
    addVersionList()
    addTextArea()
} catch (ex) {
    console.log(ex)
}



