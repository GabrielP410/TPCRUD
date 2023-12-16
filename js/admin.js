const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
  
})

function toggle () {
  let blur = document.querySelector('blur');
  blur.classList.toggle('active');
}