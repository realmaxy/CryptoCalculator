// Выпадающий список

const dropBtn = document.querySelectorAll(".dropdown__button");
const dropContent = document.querySelectorAll(".dropdown__content")


for(let elem of dropBtn) {
    elem.addEventListener("click", () => {
        let next = elem.nextElementSibling;
        next.classList.toggle("none")
    })
}

/// Изменение текста кнопки при выборе элемента

const dropItems = document.querySelectorAll(".dropdown__content_item")

for(let item of dropItems) {
    item.addEventListener("click", () =>{
        item.parentElement.parentElement.previousElementSibling.textContent = item.textContent
        item.parentElement.parentElement.classList.toggle("none")
    })
}


// Закрытие окна, при нажатии вне него 
window.addEventListener("click", (event) => {
    if(!event.target.matches(".dropdown__button")) {
        for(let elem of dropContent) {
            elem.classList.add("none")
        }
    }
})