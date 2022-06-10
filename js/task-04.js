let counterValue = 0;
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const span = document.querySelector('#value');

span.textContent = counterValue;

decrement.addEventListener('click', () => {
  span.textContent = counterValue -= 1;
});
increment.addEventListener('click', () => {
  span.textContent = counterValue += 1;
});
