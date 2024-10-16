
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




  // /swiper
  // Swiper Initialization
  const swiper1 = new Swiper('.swiper-container-1', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    effect: 'slide',
    slidesPerView: 1,
    spaceBetween: 20,
    on: {
        slideChangeTransitionStart: function () {
            const slides = document.querySelectorAll('.swiper-container-1 .swiper-slide');
            slides.forEach((slide) => {
                slide.style.opacity = '0';
            });
            const activeSlide = slides[this.activeIndex];
            activeSlide.style.opacity = '1';
        },
        slideChangeTransitionEnd: function () {
            const slides = document.querySelectorAll('.swiper-container-1 .swiper-slide');
            slides.forEach((slide) => {
                slide.style.transform = '';
            });
            const nextIndex = (this.activeIndex + 1) % slides.length;
            const nextSlide = slides[nextIndex];
            nextSlide.style.transform = 'translateX(0)';
        },
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 1,
        }
    }
});

const swiper2 = new Swiper('.swiper-container-2', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    effect: 'slide',
    slidesPerView: 1,
    spaceBetween: 20,
    on: {
        slideChangeTransitionStart: function () {
            const slides = document.querySelectorAll('.swiper-container-2 .swiper-slide');
            slides.forEach((slide) => {
                slide.style.opacity = '0';
            });
            const activeSlide = slides[this.activeIndex];
            activeSlide.style.opacity = '1';
        },
        slideChangeTransitionEnd: function () {
            const slides = document.querySelectorAll('.swiper-container-2 .swiper-slide');
            slides.forEach((slide) => {
                slide.style.transform = '';
            });
            const nextIndex = (this.activeIndex + 1) % slides.length;
            const nextSlide = slides[nextIndex];
            nextSlide.style.transform = 'translateX(0)';
        },
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 1,
        }
    }
});
