function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnEl = document.querySelector('.change-color');
const span = document.querySelector('.color');
btnEl.addEventListener('click', () => {
  const bodyColor = (document.body.style.backgroundColor = getRandomHexColor());
  span.textContent = bodyColor;
});
