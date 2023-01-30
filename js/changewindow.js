const conveterWindow = document.querySelector(".converter")
const converterBtn = document.querySelector(".converter__btn")

const profitcalcWindow = document.querySelector(".profitcalc")
const profitcalcBtn = document.querySelector(".profitcalc__btn")

function swipeWindow(event) {
    if(event.target == converterBtn) {
        profitcalcWindow.classList.add("none")
    }
    if(event.target == profitcalcBtn) {
        profitcalcWindow.classList.remove("none")
    }
}

profitcalcBtn.addEventListener("click", swipeWindow)
converterBtn.addEventListener("click", swipeWindow)
