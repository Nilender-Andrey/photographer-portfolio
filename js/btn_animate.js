const buttons = document.querySelectorAll('.button');

buttons.forEach((item) => item.addEventListener('click', addElement));

function addElement(e) {
  const addDiv = document.createElement('div');
  const mValue = Math.max(this.clientWidth, this.clientHeight);
  const position = this.getBoundingClientRect();

  addDiv.style.width = addDiv.style.height = mValue + 'px';
  addDiv.style.left = e.clientX - position.left - mValue / 2 + 'px';
  addDiv.style.top = e.clientY - position.top - mValue / 2 + 'px';

  addDiv.classList.add('pulse');
  this.appendChild(addDiv);

  setTimeout(() => addDiv.remove(), 1000);
}

document.addEventListener('mouseover', mouseover);
document.addEventListener('mouseout', mouseout);

function mouseover(e) {
  if (e.target.classList.contains('button')) {
    const btn = e.target;
    const addDiv = document.createElement('div');
    addDiv.classList.add('illumination');

    const mValue = Math.max(btn.clientWidth, btn.clientHeight);
    addDiv.style.width = addDiv.style.height = mValue + 'px';

    btn.appendChild(addDiv);

    btn.addEventListener('mousemove', mousemove);
  }
}

function mouseout(e) {
  if (e.target.classList.contains('button')) {
    const btn = e.target;
    btn.removeEventListener('mousemove', mousemove);
    document.querySelectorAll('.illumination').forEach((i) => i.remove());
  }
}

function mousemove(e) {
  const position = e.target.getBoundingClientRect();
  const illumination = document.querySelector('.illumination');
  const mValue = Math.max(e.target.clientWidth, e.target.clientHeight);
  illumination.style.left = e.clientX - position.left - mValue / 2 + 'px';
  illumination.style.top = e.clientY - position.top - mValue / 2 + 'px';
}
