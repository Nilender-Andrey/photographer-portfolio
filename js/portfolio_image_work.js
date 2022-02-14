//* Image caching
const folderPath = '../assets/img/seasons/';
const imageFolders = [
  { nameFolder: 'autumn/', fileCount: 6 },
  { nameFolder: 'spring/', fileCount: 6 },
  { nameFolder: 'summer/', fileCount: 6 },
  { nameFolder: 'winter/', fileCount: 6 },
];

function preloadImages(folderPath, imageFolders) {
  imageFolders.forEach((item) => {
    for (let i = 0; i < item.fileCount; i++) {
      const img = new Image();
      img.src = folderPath + item.nameFolder + i + '.jpg';
    }
  });
}

preloadImages(folderPath, imageFolders);

//* Сhange image

const portfolioBtns = document.querySelector('.portfolio-section__btn-wrap');
const elementsWithImage = document.querySelectorAll(
  '.portfolio-section__image',
);

function changeImages(element) {
  elementsWithImage.forEach(
    (item, index) =>
      (item.src = `${folderPath}${element.dataset.season}/${index}.jpg`),
  );
}

function changeActiveButton(element) {
  const buttons = portfolioBtns.querySelectorAll('.button');

  buttons.forEach((item) =>
    item === element
      ? item.classList.add('button-var2--active')
      : item.classList.remove('button-var2--active'),
  );
}

function clickHandler(e) {
  const element = e.target;
  if (element.classList.contains('button')) {
    changeImages(element);
    changeActiveButton(element);
  }
}

portfolioBtns.addEventListener('click', clickHandler);
