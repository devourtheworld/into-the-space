const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

// Show modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// function showNav(){
//     document.getElementsByClassName("navigation")[0].classList.toggle("active");
//   }