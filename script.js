const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.logo')

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('show');
  navbar.style.display = none;
  navbar.classList.toggle('hide');
});
