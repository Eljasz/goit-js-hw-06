const form = document.querySelector('.login-form');
form.addEventListener('submit', el => {
  el.preventDefault();
  const elements = el.currentTarget.elements;
  if (elements.email.value === '' || elements.password.value === '') {
    alert('Все поля должны быть заполненны!');
  } else {
    const newObj = {
      email: elements.email.value,
      password: elements.password.value,
    };
    console.log(newObj);
    form.reset();
  }
});
