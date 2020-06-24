const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const content = document.querySelector('.modal-content')
for (let card of cards) {
    card.addEventListener("click", () => {
        modalOverlay.classList.add('active')
        content.innerHTML += `${card.innerHTML}`
    })
}

document.querySelector(".close-modal").addEventListener("click", () => {
    modalOverlay.classList.remove("active")
    content.innerHTML = ""

})


