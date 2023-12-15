const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

function toggle () {
  let blur = document.getElementById('blur');
  blur.classList.toggle('blur')
}