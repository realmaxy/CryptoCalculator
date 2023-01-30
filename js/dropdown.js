// Выпадающий список

let dropBtn = document.querySelectorAll(".dropdown__button");

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

