// Выпадающий список

const dropBtn = document.querySelectorAll(".dropdown__button");
const dropContent = document.querySelectorAll(".dropdown__content")
const dropList = document.querySelector('.dropdown__list')

for(let elem of dropBtn) {
    elem.addEventListener("click", () => {
        let next = elem.nextElementSibling;
        next.classList.toggle("none")
    })
}

// заполнение выпадающих списков 

const fullDropdown = (dropdown, list ) => {
    for(let key in list) {
        const newDiv = document.createElement('div');
        newDiv.className = 'dropdown__content_item'
        newDiv.innerHTML = `<h2>${list[key].symbol}</h2>`
        dropdown.append(newDiv)
    }

    const dropItems = document.querySelectorAll(".dropdown__content_item")

    for(let item of dropItems) {
        item.addEventListener("click", () =>{
            item.parentElement.parentElement.previousElementSibling.textContent = item.textContent
            item.parentElement.parentElement.classList.toggle("none")
        })
    }
}



// Закрытие окна, при нажатии вне него 
window.addEventListener("click", (event) => {
    if(!event.target.matches(".dropdown__button")) {
        for(let elem of dropContent) {
            elem.classList.add("none")
        }
    }
})