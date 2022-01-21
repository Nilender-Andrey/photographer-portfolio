const designChangeBtn = document.querySelector('.header__design-change-btn');
const wrapTitle = document.querySelectorAll('.wrap-title');
const root = document.documentElement;

const darkTheme = [
  ['--body-background-color', '#000'],
  ['--btn2-text-color', '#bdae82'],
  ['--btn2-hover-background-color', 'none'],
  ['--btn2active-text-color', '#000'],
  ['--section-background-color', '#000'],
  ['--section-text-color', '#fff'],
  ['--title-background-color', '#000'],
  ['--title-text-color', '#bdae82'],
];

const lightTheme = [
  ['--body-background-color', '#fff'],
  ['--btn2-text-color', '#000'],
  ['--btn2-hover-background-color', '#bdae82'],
  ['--btn2active-text-color', '#fff'],
  ['--section-background-color', '#fff'],
  ['--section-text-color', '#000'],
  ['--title-background-color', '#fff'],
  ['--title-text-color', '#000'],
];

function designChange() {
  changeButtonImage();
}

function changeButtonImage() {
  designChangeBtn.classList.toggle('header__design-change-btn--light');
  designChangeBtn.classList.toggle('header__design-change-btn--dark');

  if (designChangeBtn.classList.contains('header__design-change-btn--dark')) {
    wrapTitle.forEach((item) => item.classList.add('wrap-title--theme--light'));

    lightTheme.forEach((item) => root.style.setProperty(item[0], item[1]));
  } else {
    wrapTitle.forEach((item) =>
      item.classList.remove('wrap-title--theme--light'),
    );

    darkTheme.forEach((item) => root.style.setProperty(item[0], item[1]));
  }
}

designChangeBtn.addEventListener('click', designChange);
