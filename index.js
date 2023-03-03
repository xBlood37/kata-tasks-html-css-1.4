const moreButton = document.querySelector('.more');
const moreSpan = document.querySelector('.more__span');
const swiperSlide1 = document.querySelector('#swiper-card-block-1');
const swiperSlide2 = document.querySelector('#swiper-card-block-2');

new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      enabled: false,
      spaceBetween: 24,
    },
  },
});

moreButton.addEventListener('click', () => {
  if (moreSpan.textContent === 'Скрыть') {
    moreSpan.textContent = 'Показать все';
  } else if (moreSpan.textContent === 'Показать все') {
    moreSpan.textContent = 'Скрыть';
  }
});
