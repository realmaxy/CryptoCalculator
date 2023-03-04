searchInp = document.querySelector('.search_inp')
drList = document.querySelector('.profitcalc_dr_list')

const renderDropdown = (dropdown, list) => {
    const childs = dropdown.children
    while(childs.length){
            for(let item of childs) {
            item.parentElement.removeChild(item)
        }   
    }

    for(let item in list) {
        const newDiv = document.createElement('div');
        newDiv.className = 'dropdown__content_item'
        newDiv.innerHTML = `<h2>${list[item]}</h2>`
        dropdown.append(newDiv)
    }

    const dropItems = document.querySelectorAll(".dropdown__content_item")
    const purchasePriceInput = document.querySelector(".profitcalc__input_purchasePrice")
    const sellingPriceInput = document.querySelector(".profitcalc__input_sellingPrice")

    for(let item of dropItems) {
        item.addEventListener("click", () =>{
            const currencieName = item.textContent
            item.parentElement.parentElement.previousElementSibling.textContent = currencieName
            item.parentElement.parentElement.classList.toggle("none")
            
            for(key in Currencies) {
                if(Currencies[key].symbol === currencieName) {
                    purchasePriceInput.value = Currencies[key].price.toFixed(2)
                    sellingPriceInput.value = Currencies[key].price.toFixed(2)
                }
            }
        })
    }

}

searchInp.addEventListener('input', (event)=>{
    const curList = {...Currencies}
    wordSize = event.target.value.length
    let newList = []

    for(key in curList) {
        if(curList[key].symbol.slice(0, wordSize) == event.target.value) {
            let newItem = curList[key].symbol
            newList.push(newItem)
        }
    }
    renderDropdown(drList, newList)
})

