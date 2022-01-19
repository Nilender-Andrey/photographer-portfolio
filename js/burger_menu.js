//* Burger menu

const burger = document.querySelector('.burger-btn');
const burgerNav = document.querySelector('.burger-nav');

burger.addEventListener('click', burgerHandlerClick);
burgerNav.addEventListener('click', burgerNavHandlerClick);

function burgerHandlerClick() {
  burger.classList.toggle('burger-btn--open');

  burger.classList.contains('burger-btn--open')
    ? burgerNav.classList.remove('burger-nav--hidden')
    : burgerNav.classList.add('burger-nav--hidden');
}

function burgerNavHandlerClick(e) {
  console.log(e.target);
  e.target.classList.contains('burger-nav__link') && burgerHandlerClick();
}
