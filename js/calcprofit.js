const profitCalcInputCount = document.querySelector(".input__count")
const profitCalcInputPrice = document.querySelector(".price__count")
const profitCalcChooseCurrencie = document.querySelector(".profitcalcDropBtn")
const calcButton = document.querySelector(".calcbutton")

calcButton.addEventListener("click", ()=> {
    if(!(profitCalcChooseCurrencie.textContent == "Выберите валюту")) {
        let cost = Currencies[profitCalcChooseCurrencie.textContent].values.USD.price
        let profit = cost * Number(profitCalcInputCount.value) - Number(profitCalcInputCount.value) * Number(profitCalcInputPrice.value)
        console.log(profit)
    }
})