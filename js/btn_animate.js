const animateButton = function (e) {
  console.log('111');
  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(function () {
    e.target.classList.remove('animate');
  }, 700);
};

const buttonVar1 = document.querySelectorAll('.button-var1');

buttonVar1.forEach((element) => {
  element.addEventListener('click', animateButton, false);
});
