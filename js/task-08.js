const form = document.querySelector('.login-form');
const inputs = document.querySelectorAll('input');
form.addEventListener('submit', el => {
  el.preventDefault();
  const elements = el.target.elements;
  console.log(elements);
  [...inputs].forEach(el => {
    if (el.value === '') {
      alert('Все поля должны быть заполненны!');
    } else {
      const newObj = {
        email: elements.email.value,
        password: elements.password.value,
      };
      console.log(newObj);
    }
  });
  form.reset();
});
