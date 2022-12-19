const categoriesEl = document.querySelectorAll("#categories > .item");
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach((category) => {
  const categoryTitleEl = category.querySelector("h2");
  const categoryListEl =
    categoryTitleEl.nextElementSibling.querySelectorAll("li");

  console.log(`Category: ${categoryTitleEl.textContent}`);
  console.log(`Elements: ${categoryListEl.length}`);
});
