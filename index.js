let flipElement
window.onload = () => {
  flipElement = document.getElementById('flip-container')
  flipElement.addEventListener('mouseover', addClickHandler)
}

function addClickHandler () {
  flipElement.removeEventListener('mouseover', addClickHandler)
  setTimeout(() => {
    flipElement.addEventListener('click', handleEnvelopeClick)
  }, 500)
}

function handleEnvelopeClick () {
  flipElement.classList.add('fadeout')
  const contents = document.getElementById('envelope-content')
  contents.style.display = 'block'
  const front = document.getElementById('envelope-front')
  front.style.display = 'none'
}
