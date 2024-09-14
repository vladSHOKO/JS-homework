"use strict"

function showResults(result) {
    let ul = document.querySelector(".search_result")
    for (let i = 0; i < result.results.length; i++) {
        let li = document.createElement("li")
        li.textContent = result.results[i].name
        li.classList.add("search_result")
        ul.appendChild(li)
        createResultListener(result.results[i], li)
    }
}

function createFindButtonListener() {
    let findButton = document.getElementById("search_request_btn")
    findButton.addEventListener("click", function () {
        document.getElementById("search_result_list").innerHTML = ""
        swapiRequest()
    })
}

async function swapiRequest() {
    let inputText = document.getElementById("person_search_input").value
    let searchType = document.getElementById("select-list").value
    changePersonData()

    let api = "https://swapi.dev/api/1234";
    let url = api + searchType + "/?search=" + inputText;

    let response = await fetch(url)
    if (response.ok) {
        let result = await response.json();
        await showResults(result)
    } else {
        alert("HTTP error " + response.status)
    }
}

function changePersonData() {
    let div = document.getElementById("person-data")
    let searchType = document.getElementById("select-list").value
    if (searchType === "people") {
        div.innerHTML = '<div>Имя: <span id="name"></div>\n' +
            '        <div>Рост: <span id="height"></div>\n' +
            '        <div>Вес: <span id="mass"></div>\n' +
            '        <div>Год рождения: <span id="birth_year"></div>\n' +
            '        <div>В скольки фильмах появлялся: <span id="films_count"></div>'
    } else if (searchType === "starships") {
        div.innerHTML = '<div>Имя: <span id="name"></div>\n' +
            '        <div>Модель: <span id="model"></div>\n' +
            '        <div>Количество пассажиров: <span id="passengers"></div>\n' +
            '        <div>Класс корабля: <span id="starship_class"></div>\n' +
            '        <div>В скольки фильмах появлялся: <span id="films_count"></div>'
    } else {
        div.innerHTML = '<div>Имя: <span id="name"></div>\n' +
            '        <div>Климат: <span id="climate"></div>\n' +
            '        <div>Диаметр: <span id="diameter"></div>\n' +
            '        <div>Популяция: <span id="population"></div>\n' +
            '        <div>В скольки фильмах появлялся: <span id="films_count"></div>'
    }


}

function showPeopleData(result) {
    let name = document.getElementById("name")
    name.textContent = result.name

    let height = document.getElementById("height")
    height.textContent = result.height

    let mass = document.getElementById("mass")
    mass.textContent = result.mass

    let birthYear = document.getElementById("birth_year")
    birthYear.textContent = result.birth_year

    let filmsCount = document.getElementById("films_count")
    filmsCount.textContent = result.films.length
}

function showStarshipsData(result) {
    let name = document.getElementById("name")
    name.textContent = result.name

    let model = document.getElementById("model")
    model.textContent = result.model

    let passengers = document.getElementById("passengers")
    passengers.textContent = result.passengers

    let starshipClass = document.getElementById("starship_class")
    starshipClass.textContent = result.starship_class

    let filmsCount = document.getElementById("films_count")
    filmsCount.textContent = result.films.length
}

function showPlanetsData(result) {
    let name = document.getElementById("name")
    name.textContent = result.name

    let climate = document.getElementById("climate")
    climate.textContent = result.climate

    let diameter = document.getElementById("diameter")
    diameter.textContent = result.diameter

    let population = document.getElementById("population")
    population.textContent = result.population

    let filmsCount = document.getElementById("films_count")
    filmsCount.textContent = result.films.length

}

function createResultListener(result, element) {
    element.addEventListener("click", function () {
        let searchType = document.getElementById("select-list").value
        if (searchType === "people") {
            showPeopleData(result)
        } else if (searchType === "starships") {
            showStarshipsData(result)
        } else {
            showPlanetsData(result)
        }

    })
}

createFindButtonListener()
