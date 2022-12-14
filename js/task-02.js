const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredientsListEl = document.querySelector("#ingredients");

const markup = ingredients.map((ingredient) => {
  let newItemEl = document.createElement("li");
  newItemEl.textContent = ingredient;
  newItemEl.classList.add("item");

  return newItemEl;
});

ingredientsListEl.append(...markup);
console.log(ingredientsListEl);
