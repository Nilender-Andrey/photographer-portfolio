import { setDarkTheme, setLightTheme } from './design_change.js';
import { switchLanguage } from './switch_language.js';

function setTheme(theme) {
  if (theme === 'light') {
    setLightTheme();
  } else {
    setDarkTheme();
  }
}

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    const lang = localStorage.getItem('lang');
    document.querySelector(`#${lang}`).checked = true;

    switchLanguage(lang);
  }
  if (localStorage.getItem('theme')) {
    const theme = localStorage.getItem('theme');

    setTheme(theme);
  }
}

document.addEventListener('DOMContentLoaded', getLocalStorage);

export default {};
