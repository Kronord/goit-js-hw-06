const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfProducts = product => ingredients.map(el => {
    product = document.createElement("li");
    product.classList.add("item");
    product.textContent = el;
    return product;
  });

const list = document.querySelector("#ingredients").append(...listOfProducts());
