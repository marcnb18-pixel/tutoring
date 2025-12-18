document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  // Open/close menu when tapping hamburger
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
    hamburger.classList.toggle('open');
  });

  // Close menu when tapping any link
  document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('show');
      hamburger.classList.remove('open');
    });
  });

});

hamburger.classList.toggle('open');