searchInp = document.querySelector('.search_inp')
drList = document.querySelector('.dropdown__list')

const fullDropdown = (dropdown, list) => {

    
    if(!dropdown.length){
        for(let key in list) {
        const newDiv = document.createElement('div');
        newDiv.className = 'dropdown__content_item'
        newDiv.innerHTML = `<h2>${list[key].symbol}</h2>`
        dropdown.append(newDiv)
        }
    }

    const dropItems = document.querySelectorAll(".dropdown__content_item")

    for(let item of dropItems) {
        item.addEventListener("click", () =>{
            const currencieName = item.textContent
            item.parentElement.parentElement.previousElementSibling.textContent = currencieName
            item.parentElement.parentElement.classList.toggle("none")
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

    console.log(newList)
    
})

