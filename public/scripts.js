const cards = document.querySelectorAll('.card')
for (let card of cards) {
  
  card.addEventListener("click", () => {
    const pageId = card.getAttribute("id")
    window.location.href = `/recipes/${pageId}`
  })
}
