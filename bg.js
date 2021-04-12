const body = document.querySelector("body");

const IMG_NUM = 3;

function paintImage(imgNum) {
  const image = new Image();
  image.src = `images/${imgNum + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function getRandom() {
  const numder = Math.floor(Math.random() * IMG_NUM);
  return numder;
}

function init() {
  const randomNum = getRandom();
  paintImage(randomNum);
}

init();
