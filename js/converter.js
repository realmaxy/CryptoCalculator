// Элементы конвертера

const fromInp = document.querySelector(".converter__from_input")
const toInp = document.querySelector(".converter__to_input")
const fromBtn = document.querySelector(".from__button")
const toBtn = document.querySelector(".to__button")

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

// Swap button 

const swapButton = document.querySelector(".converter__swap_button")

swapButton.addEventListener("click", ()=> {
    let tmp1 = fromInp.value
    let tmp2 = fromBtn.textContent
    
    fromInp.value = toInp.value
    toInp.value = tmp1

    fromBtn.textContent = toBtn.textContent
    toBtn.textContent = tmp2    
})