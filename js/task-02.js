const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ul = document.querySelector('#ingredients');
const li = ingredients.map(el => {
  const item = document.createElement('li');
  item.textContent = el;
  item.classList.add('item');
  return item;
});

ul.append(...li);
