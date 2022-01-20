const designChangeBtn = document.querySelector('.header__design-change-btn');

function designChange() {
  changeButtonImage();
}

function changeButtonImage() {
  designChangeBtn.classList.toggle('header__design-change-btn--light');
  designChangeBtn.classList.toggle('header__design-change-btn--dark');
}

designChangeBtn.addEventListener('click', designChange);
