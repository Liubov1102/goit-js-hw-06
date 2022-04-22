const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsCont = document.querySelector('ul#ingredients');

const makeIngredients = options => 
  options.map(option => {

const ingredientsEl = document.createElement('li');
ingredientsEl.classList.add('item');
ingredientsEl.textContent = option;

return ingredientsEl;
});

ingredientsCont.append(...makeIngredients(ingredients));

