const selectCurBtn = document.querySelector(".profitcalc__dropdown_button")
const purchasePriceInput = document.querySelector(".profitcalc__input_purchasePrice")
const sellingPriceInput = document.querySelector(".profitcalc__input_sellingPrice")
const investmentsInput = document.querySelector(".profitcalc__input_investmentsInput")
const infoProfit = document.querySelector(".profitcalc__info_profit")
const infoTotalAmount = document.querySelector(".profitcalc__info_totalamount")



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

        if(profit < 0) {
            infoProfit.style.backgroundColor = '#3a0f0f'
            infoProfit.style.color = '#ef2c2c'
            infoTotalAmount.style.backgroundColor = '#3a0f0f'
            infoTotalAmount.style.color = '#ef2c2c'
        }
        else {
            infoProfit.style.backgroundColor = '#071f0d'
            infoProfit.style.color = '#6ccf59'
            infoTotalAmount.style.backgroundColor = '#071f0d'
            infoTotalAmount.style.color = '#6ccf59'
        }
    }
}