const categoriesEl = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${categoriesEl.length}`);

//console.log('Number of categories:', document.querySelector('ul').children.length);

  categoriesEl.forEach.call(categoriesEl, (element) => {
  const title = element.querySelector('h2').textContent;
  const itemsLength = element.querySelectorAll('li').length;
  console.log(`Category: ${title}
  Elements: ${itemsLength}`)
  });

  