const toggleButton = document.querySelector('.button-open');
const additionalBrands = document.querySelector('.brands__readnext__list');
const arrowIcon = document.querySelector('.brands__button__arrow-icon');

toggleButton.addEventListener('click', function () {
  const buttonText = toggleButton.textContent.trim();

  if (buttonText === 'Показать все') {
    toggleButton.querySelector('span').nextSibling.textContent = 'Скрыть';
    additionalBrands.classList.remove('brands__readnext__list_hidden');
    arrowIcon.style.transform = 'rotate(180deg)';
  } else {
    toggleButton.querySelector('span').nextSibling.textContent = 'Показать все';
    additionalBrands.classList.add('brands__readnext__list_hidden');
    arrowIcon.style.transform = 'rotate(0deg)';
  }
});

const burgerBtn = document.querySelector('.header__burger__btn');
const closeBtn = document.querySelector('.sidebar__close__btn');
const sidebar = document.querySelector('.sidebar');
const blur = document.querySelector('.blur');

burgerBtn.addEventListener('click', function () {
  console.log('sidebar opened');
  sidebar.classList.toggle('sidebar_open');
  blur.classList.toggle('blur_open');
});

closeBtn.addEventListener('click', function () {
  console.log('sidebar closed');
  sidebar.classList.toggle('sidebar_open');
  blur.classList.toggle('blur_open');
});
