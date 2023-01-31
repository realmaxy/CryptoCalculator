const selectCurBtn = document.querySelector(".profitcalc__dropdown_button")
const purchasePriceInput = document.querySelector(".profitcalc__input_purchasePrice")
const sellingPriceInput = document.querySelector(".profitcalc__input_sellingPrice")
const investmentsInput = document.querySelector(".profitcalc__input_investmentsInput")
const infoProfit = document.querySelector(".profitcalc__info_profit")
const infoTotalAmount = document.querySelector(".profitcalc__info_totalamount")
const profitcalcDropItems = document.querySelectorAll(".profitcalc_dropItem")

//Ввод цены выбранной валюты в инпуты
for(let elem of profitcalcDropItems) {
    elem.addEventListener("click", event => {
        const currency = event.target.textContent
        purchasePriceInput.value = (Currencies[currency].values.USD.price).toFixed(2)
        sellingPriceInput.value = (Currencies[currency].values.USD.price).toFixed(2)
    })
}

// Вывод профита и общей суммы при выходе

investmentsInput.addEventListener("input", renderProfit)
sellingPriceInput.addEventListener("input", renderProfit)
purchasePriceInput.addEventListener("input", renderProfit)

function renderProfit() {
    const buyValue = Number(purchasePriceInput.value)
    const sellValue = Number(sellingPriceInput.value)
    const invValue = Number(investmentsInput.value)

    const totalAmount = invValue / buyValue * sellValue
    const profit = totalAmount - invValue

    if(sellingPriceInput.value != '' && purchasePriceInput.value != '' && investmentsInput.value) {
        infoProfit.textContent = `$${profit.toFixed(3)}`
        infoTotalAmount.textContent = `$${totalAmount.toFixed(3)}`
    }
}