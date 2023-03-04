const moreButton = document.querySelector('.more');
const moreSpan = document.querySelector('.more__span');

moreButton.addEventListener('click', () => {
  if (moreSpan.textContent === 'Скрыть') {
    moreSpan.textContent = 'Показать все';
  } else if (moreSpan.textContent === 'Показать все') {
    moreSpan.textContent = 'Скрыть';
  }
});
