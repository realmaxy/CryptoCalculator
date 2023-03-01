// Элементы конвертера

const fromInp = document.querySelector(".converter__from_input")
const toInp = document.querySelector(".converter__to_input")
const fromBtn = document.querySelector(".from__button")
const toBtn = document.querySelector(".to__button")
// Swap button 

const swapButton = document.querySelector(".converter__swap_button")

swapButton.addEventListener("click", ()=> {
    let tmp1 = fromInp.value
    let tmp2 = fromBtn.textContent
    
    fromInp.value = toInp.value
    toInp.value = tmp1

    fromBtn.textContent = toBtn.textContent
    toBtn.textContent = tmp2    
})