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
