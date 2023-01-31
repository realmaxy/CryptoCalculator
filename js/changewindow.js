const conveterWindow = document.querySelector(".converter")
const converterBtn = document.querySelector(".converter_btn")

const profitcalcWindow = document.querySelector(".profitcalc")
const profitcalcBtn = document.querySelector(".profitcalc_btn")

function swipeWindow(event) {
    if(event.target == converterBtn) {
        profitcalcWindow.classList.add("none")
        conveterWindow.classList.remove("none")
    }
    if(event.target == profitcalcBtn) {
        conveterWindow.classList.add("none")
        profitcalcWindow.classList.remove("none")
    }
}

profitcalcBtn.addEventListener("click", swipeWindow)
converterBtn.addEventListener("click", swipeWindow)
