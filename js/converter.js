// Элементы конвертера

const fromInp = document.getElementById("from__input")
const toInp = document.getElementById("to__input")
const fromBtn = document.getElementById("from__btn")
const toBtn = document.getElementById("to__btn")

//

//

function convert(event) {
    if(!(toBtn.textContent == "Выберите валюту") && !(fromBtn.textContent == "Выберите валюту")) {
        const firstCur = fromBtn.textContent
        const secondCur = toBtn.textContent

        if (event.target == fromInp) {toInp.value = ((Currencies[firstCur].values.USD.price * fromInp.value) / (Currencies[secondCur].values.USD.price)).toFixed(3)}

        if(event.target == toInp) {
            fromInp.value = ((Currencies[secondCur].values.USD.price * toInp.value) / (Currencies[firstCur].values.USD.price)).toFixed(3)
        }
    }
}

// Прослушка событий для input

fromInp.addEventListener("input", convert)
toInp.addEventListener("input", convert)

/// Изменение текста кнопки при выборе элемента

const dropItems = document.querySelectorAll(".drop__item")

for(let item of dropItems) {
    item.addEventListener("click", () =>{
        item.parentElement.previousElementSibling.textContent = item.textContent
        item.parentElement.classList.toggle("none")
    })
}


