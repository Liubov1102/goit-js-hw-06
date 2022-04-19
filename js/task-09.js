function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector('body');
const button = document.querySelector('button');
const textColor = document.querySelector('.color');
console.log(textColor);

button.addEventListener('click', onChangeColor);
function onChangeColor(event) {
  body.style.backgroundColor = getRandomHexColor();
  textColor.textContent = getRandomHexColor();
};
console.log(getRandomHexColor());
