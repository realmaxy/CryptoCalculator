let dropBtn = document.querySelectorAll(".dropbtn");

for(let elem of dropBtn) {
    elem.addEventListener("click", () => {
        let next = elem.nextElementSibling;
        next.classList.toggle("none")
    })
}

