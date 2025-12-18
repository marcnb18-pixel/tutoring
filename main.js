document.addEventListener("DOMContentLoaded", () => {

  /* ------------------------------
     ✅ MOBILE MENU
  ------------------------------ */
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


  /* ------------------------------
     ✅ FAQ ACCORDION
  ------------------------------ */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {

      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('open');
          otherItem.querySelector('.faq-answer').style.maxHeight = null;
        }
      });

      // Toggle current item
      item.classList.toggle('open');
      const answer = item.querySelector('.faq-answer');

      if (item.classList.contains('open')) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = null;
      }
    });
  });

});
