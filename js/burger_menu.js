//* Burger menu

const burger = document.querySelector('.burger-btn');
const burgerNav = document.querySelector('.burger-nav');
const body = document.body;

burger.addEventListener('click', burgerHandlerClick);
burgerNav.addEventListener('click', burgerNavHandlerClick);

function burgerHandlerClick() {
  burger.classList.toggle('burger-btn--open');

  if (burger.classList.contains('burger-btn--open')) {
    burgerNav.classList.remove('burger-nav--hidden');
    body.style.position = 'fixed';
  } else {
    burgerNav.classList.add('burger-nav--hidden');
    body.style.position = 'relative';
  }
}

function burgerNavHandlerClick(e) {
  console.log(e.target);
  e.target.classList.contains('burger-nav__link') && burgerHandlerClick();
}
