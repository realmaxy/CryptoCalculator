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



// Закрытие окна, при нажатии вне него 
window.addEventListener("click", (event) => {
    if(!event.target.matches(".dropdown__button") && !event.target.matches(".search_inp")) {
        for(let elem of dropContent) {
            elem.classList.add("none")
        }
    }
})