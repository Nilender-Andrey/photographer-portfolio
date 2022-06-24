import { i18Obj, placeholderI18 } from './translate.js';

const headerLangsSwitcher = document.querySelector('.header__langs-switcher');

headerLangsSwitcher.addEventListener('change', change);

function change() {
  const switchButtons = document.querySelectorAll('input[name=langs]');

  switchButtons.forEach((item) => {
    if (item.checked === true) {
      localStorage.lang = item.value;
      switchLanguage(item.value);
    }
  });
}

export function switchLanguage(language = 'en') {
  const elementsI18 = document.querySelectorAll('[data-i18]');
  const placeholder = document.querySelectorAll('[data-i18placeholder]');

  elementsI18.forEach(
    (item) => (item.textContent = i18Obj[language][item.dataset.i18]),
  );

  placeholder.forEach(
    (item) =>
      (item.placeholder =
        placeholderI18[language][item.dataset.i18placeholder]),
  );
}
