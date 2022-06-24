const designChangeBtn = document.querySelector('.header__design-change-btn');
const wrapTitle = document.querySelectorAll('.wrap-title');
const root = document.documentElement;

export function setLightTheme() {
  designChangeBtn.classList.add('header__design-change-btn--dark');
  wrapTitle.forEach((item) => item.classList.add('wrap-title--theme--light'));
  root.classList.add('light');
}

export function setDarkTheme() {
  designChangeBtn.classList.remove('header__design-change-btn--dark');
  wrapTitle.forEach((item) =>
    item.classList.remove('wrap-title--theme--light'),
  );
  root.classList.remove('light');
}

function designChange() {
  if (!designChangeBtn.classList.contains('header__design-change-btn--dark')) {
    localStorage.theme = 'light';
    setLightTheme();
  } else {
    localStorage.theme = 'dark';
    setDarkTheme();
  }
}

designChangeBtn.addEventListener('click', designChange);
