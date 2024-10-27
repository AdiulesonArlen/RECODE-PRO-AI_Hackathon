// script.js
document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.querySelector('.menu-icon');
  const navbarMobile = document.querySelector('.navbar-mobile');

  menuIcon.addEventListener('click', function() {
      navbarMobile.classList.toggle('active');
  });
});
