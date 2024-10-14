
  function revealOnScroll() {
    const cards = document.querySelectorAll('.image-card');
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < windowHeight - revealPoint) {
        card.classList.add('visible');
      } else {
        card.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll); // Trigger on page load

