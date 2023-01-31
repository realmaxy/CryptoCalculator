const conveterWindow = document.querySelector(".converter")
const converterBtn = document.querySelector(".converter_btn")

const profitcalcWindow = document.querySelector(".profitcalc")
const profitcalcBtn = document.querySelector(".profitcalc_btn")

const appTitle = document.querySelector(".app__title")

function swipeWindow(event) {
    if(event.target == converterBtn) {
        profitcalcWindow.classList.add("none")
        conveterWindow.classList.remove("none")
        appTitle.textContent = "Конвертер валют"
    }
    if(event.target == profitcalcBtn) {
        conveterWindow.classList.add("none")
        profitcalcWindow.classList.remove("none")
        appTitle.textContent = "Калькулятор дохода от криптовалюты"
    }
}

profitcalcBtn.addEventListener("click", swipeWindow)
converterBtn.addEventListener("click", swipeWindow)
