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
        let inputText = document.getElementById("person_search_input").value
        let api = "https://swapi.dev/api/";
        let url = api + "people/?search=" + inputText;
        fetch(url).then(response => response.json()).then(result => {
            showResults(result)
        })
    })
}

function createResultListener(result, element) {
    element.addEventListener("click", function () {
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
    })
}

createFindButtonListener()
