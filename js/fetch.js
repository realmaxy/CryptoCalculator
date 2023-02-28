//// получение данных

Currencies = {}

async function getCryptocurrency() {
    let response = await fetch("https://api.cryptorank.io/v1/currencies?api_key=f2ffee1ae1c37aecd0e7ba5cfaef8fc62d42610c1e2311a02efbdff4377f")
    let data = await response.json();
    let result = await data;
    

    Currencies.BTC = result.data[0]
    Currencies.ETH = result.data[1]
    Currencies.SOL = result.data[11]
    Currencies.LTC = result.data[15]
    Currencies.AVAX = result.data[16]
    
    
}

getCryptocurrency();