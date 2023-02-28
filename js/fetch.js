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
});
}

getCryptocurrency();