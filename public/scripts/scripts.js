const cards = document.querySelectorAll('.card')
for (let card of cards) {
  
  card.addEventListener("click", () => {
    const pageId = card.getAttribute("id")
    window.location.href = `/recipes/${pageId}`
  })
}


document.getElementById('on1').addEventListener('click', () => {
  if(document.getElementById('recipe-text-box1').style.display == 'none'){
      document.getElementById('on1').innerHTML = 'esconder'
      document.getElementById('recipe-text-box1').style.display = 'block'
  }else{
      
      document.getElementById('on1').innerHTML = 'mostrar'
      document.getElementById('recipe-text-box1').style.display = 'none'
  }
})


document.getElementById('on2').addEventListener('click', () => {
  if(document.getElementById('recipe-text-box2').style.display == 'none'){
      document.getElementById('on2').innerHTML = 'esconder'
      document.getElementById('recipe-text-box2').style.display = 'block'
  }else{
      
      document.getElementById('on2').innerHTML = 'mostrar'
      document.getElementById('recipe-text-box2').style.display = 'none'
  }
})


document.getElementById('on3').addEventListener('click', () => {
  if(document.getElementById('recipe-text-box3').style.display == 'none'){
      document.getElementById('on3').innerHTML = 'esconder'
      document.getElementById('recipe-text-box3').style.display = 'block'
  }else{
      
      document.getElementById('on3').innerHTML = 'mostrar'
      document.getElementById('recipe-text-box3').style.display = 'none'
  }
})
