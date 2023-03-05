const moreButton = document.querySelector('.more');
const moreSpan = document.querySelector('.more__span');
const brandsLink = document.querySelector('.brands__link');
const brandsId = document.querySelectorAll('#brands-id');

brandsLink.addEventListener('click', (e) => e.preventDefault());

function deleteClass(elem, className) {
  elem.forEach((item) => {
    item.classList.remove(className);
  });
}

function addClass(elem, className) {
  elem.forEach((item) => {
    item.classList.add(className);
  });
}

moreButton.addEventListener('click', () => {
  if (moreSpan.textContent === 'Скрыть') {
    moreSpan.textContent = 'Показать все';

    addClass(brandsId, 'brands__card--block-none');
  } else if (moreSpan.textContent === 'Показать все') {
    moreSpan.textContent = 'Скрыть';

    deleteClass(brandsId, 'brands__card--block-none');
  }
});

new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      enabled: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    768: {
      enabled: false,
      slidesPerView: 'auto',
    },
  },
});
