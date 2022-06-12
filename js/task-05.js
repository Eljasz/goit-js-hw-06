const input = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
input.addEventListener('input', () => {
  if (input.value !== '') {
    spanEl.textContent = input.value;
  } else {
    spanEl.textContent = 'Anonymous';
  }
});
