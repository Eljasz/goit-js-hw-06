const input = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
input.addEventListener('input', () => {
  spanEl.textContent = input.value;
});
