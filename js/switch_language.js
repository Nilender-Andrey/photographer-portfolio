import i18Obj from './translate.js';

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

  elementsI18.forEach(
    (item) => (item.textContent = i18Obj[language][item.dataset.i18]),
  );
}
