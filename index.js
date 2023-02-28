// const openPopupButton = document.querySelector('.menu__item_open');
// const closePopupButton = document.querySelector('.popup-menu__close');
// const popupAside = document.querySelector('.aside');
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

// function blockOnDisplay(value) {
//   popupAside.style.display = value;
// }

// closePopupButton.addEventListener('click', () => {
//   blockOnDisplay('none');
// });

// openPopupButton.addEventListener('click', () => {
//   blockOnDisplay('flex');
// });

moreButton.addEventListener('click', () => {
  if (moreSpan.textContent === 'Скрыть') {
    moreSpan.textContent = 'Показать все';
    swiperSlide1.style.display = 'none';
    swiperSlide2.style.display = 'none';
  } else if (moreSpan.textContent === 'Показать все') {
    moreSpan.textContent = 'Скрыть';
    swiperSlide1.style.display = 'block';
    swiperSlide2.style.display = 'block';
  }
});
