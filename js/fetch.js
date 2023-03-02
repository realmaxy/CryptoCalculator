//// получение данных

Currencies = {}

async function getCryptocurrency() {
    let response = await fetch("https://api.cryptorank.io/v1/currencies?api_key=f2ffee1ae1c37aecd0e7ba5cfaef8fc62d42610c1e2311a02efbdff4377f")
    let data = await response.json();
    let result = await data;
    
    Currencies = {
        ...result.data.map(item => {
            const newItem = {
                name: item.name,
                symbol: item.symbol,
                price: item.values.USD.price
            }
            return newItem
        })
    }

    const dropLists = document.querySelectorAll('.dropdown__list')
    dropLists.forEach(element => {
    fullDropdown(element, Currencies)


    
    const profitcalcDropItems = document.querySelectorAll(".dropdown__content_item")
    const purchasePriceInput = document.querySelector(".profitcalc__input_purchasePrice")
    const sellingPriceInput = document.querySelector(".profitcalc__input_sellingPrice")

    for(let elem of profitcalcDropItems) {
        elem.addEventListener("click", event => {
            const currencie = event.target.textContent
            for(key in Currencies) {
                if(Currencies[key].symbol === currencie && elem.parentElement !== document.querySelector('.drop_convert_from') && elem.parentElement !== document.querySelector('.drop_convert_to')) {
                    const price = Currencies[key].price
                    purchasePriceInput.value = price.toFixed(2)
                    sellingPriceInput.value = price.toFixed(2)
                    break;
                }
            }
        })
    }


    const fromInp = document.querySelector(".converter__from_input")
    const toInp = document.querySelector(".converter__to_input")
    const fromBtn = document.querySelector(".from__button")
    const toBtn = document.querySelector(".to__button")

    function getPrice(list, value) {
        for(key in list) {
            let flag = false
            if (list[key].symbol === value) {    
                return list[key].price
            }
        }
    }


    
    function convert(event) {
        const firstCur = fromBtn.textContent
        const secondCur = toBtn.textContent
        let firstCurPrice = getPrice(Currencies, firstCur)
        let secondCurPrice = getPrice(Currencies, secondCur)
        
        
        if(event.target == fromInp) {
            toInp.value = (firstCurPrice * fromInp.value / secondCurPrice).toFixed(2)
        }
        if(event.target == toInp) {
            fromInp.value = (secondCurPrice * toInp.value / firstCurPrice).toFixed(2)
        }
    }

    
    // Прослушка событий для input

    fromInp.addEventListener("input", convert)
    toInp.addEventListener("input", convert)


});
}

getCryptocurrency();