/// brands
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
/// tecniques
const toggleBtn = document.querySelector('.technique__button-open');
const additionalTechnique = document.querySelector('.technique__readnext');
const arrowTechnique = document.querySelector('.technique__button__arrow-icon');

toggleBtn.addEventListener('click', function () {
  const techniqueText = toggleBtn
    .querySelector('span:last-child')
    .textContent.trim();

  if (techniqueText === 'Показать все') {
    toggleBtn.querySelector('span:last-child').textContent = 'Скрыть';
    additionalTechnique.classList.add('technique__readnext_open');
    arrowTechnique.style.transform = 'rotate(180deg)';
  } else {
    toggleBtn.querySelector('span:last-child').textContent = 'Показать все';
    additionalTechnique.classList.remove('technique__readnext_open');
    arrowTechnique.style.transform = 'rotate(0deg)';
  }
});

/// main text
const readMoreLink = document.querySelector('.main__readnext-link');
const hiddenText = document.querySelector('.main__content__hidden');
const arrow = document.querySelector('.main__expand');

readMoreLink.addEventListener('click', function (event) {
  event.preventDefault();
  hiddenText.classList.toggle('main__content__hidden');
  arrow.classList.toggle('main__expand-rotate');
});

/// burger menu
const burgerBtn = document.querySelector('.header__burger__btn');
const closeBtn = document.querySelector('.sidebar__close__btn');
const sidebar = document.querySelector('.sidebar');
const blur = document.querySelector('.blur');

burgerBtn.addEventListener('click', function () {
  sidebar.classList.toggle('sidebar_open');
  toggleBlur();
});

closeBtn.addEventListener('click', function () {
  sidebar.classList.toggle('sidebar_open');
  toggleBlur();
});

/// feedback
const navBtns = document.querySelectorAll('.contacts__chat__btn');
navBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    feedback.classList.toggle('feedback_open');
    toggleBlur();
  });
});

const feedbackCloseBtn = document.querySelector('.feedback__close-btn');
const feedback = document.querySelector('.feedback');

feedbackCloseBtn.addEventListener('click', function () {
  feedback.classList.toggle('feedback_open');
  toggleBlur();
});

const callBtn = document.querySelectorAll('.contacts__phone__btn');
const callbackCloseBtn = document.querySelector('.callback__close-btn');
const callback = document.querySelector('.callback');

callBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    callback.classList.toggle('callback_open');
    toggleBlur();
  });
});

callbackCloseBtn.addEventListener('click', function () {
  callback.classList.toggle('callback_open');
  toggleBlur();
});

function toggleBlur() {
  const openedPanels = document.querySelectorAll(
    '.feedback_open, .callback_open, .sidebar_open',
  );

  if (openedPanels.length > 0) {
    blur.classList.add('blur_open');
  } else {
    blur.classList.remove('blur_open');
  }
}
