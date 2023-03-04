const moreButton = document.querySelector('.more');
const moreSpan = document.querySelector('.more__span');

new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    425: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    500: {
      enabled: false,
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
