// const openPopupButton = document.querySelector('.menu__item_open');
// const closePopupButton = document.querySelector('.popup-menu__close');
// const popupAside = document.querySelector('.aside');

// function blockOnDisplay(value) {
//   popupAside.style.display = value;
// }

// closePopupButton.addEventListener('click', () => {
//   blockOnDisplay('none');
// });

// openPopupButton.addEventListener('click', () => {
//   blockOnDisplay('flex');
// });

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
