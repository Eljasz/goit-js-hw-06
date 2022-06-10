const items = document.querySelectorAll('.item');
console.log(`Number of catigories ${items.length}`);
[...items].forEach(el => {
  const title = el.firstElementChild;
  const value = el.querySelectorAll('li');
  console.log(`Category: ${title.textContent}
Elements:${value.length}`);
});
