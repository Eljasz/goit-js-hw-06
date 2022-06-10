const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
inputEl.addEventListener('input', el => {
  spanEl.style.fontSize = `${el.target.value}px`;
});
