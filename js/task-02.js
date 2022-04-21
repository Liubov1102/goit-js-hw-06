const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsCont = document.querySelector('ul#ingredients');

const makeIngredients = options => {
 return options.map(option => {

const ingredientsEl = document.createElement('li');
ingredientsEl.classList.add('item');
ingredientsEl.textContent = option;

return ingredientsEl;
});
}
const elements = makeIngredients(ingredients);

ingredientsCont.append(...elements);

