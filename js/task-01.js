
const categoriesEl = document.querySelectorAll('#categories > .item');
console.log(`Number of categories: ${categoriesEl.length}`);

for (const category of categoriesEl) {
    const categoryTitleEl = category.querySelector('h2');
const categoryListEl = categoryTitleEl.nextElementSibling.querySelectorAll('li');

console.log(`Category: ${categoryTitleEl.textContent}`);
console.log(`Elements: ${categoryListEl.length}`);
}









