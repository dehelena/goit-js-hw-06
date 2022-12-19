function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.change - color і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const changeColorBtn = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");

changeColorBtn.addEventListener("click", changeBgColor);

function changeBgColor() {
  if (changeColorBtn) {
    document.body.style.backgroundColor = getRandomHexColor();
    colorEl.textContent = document.body.style.backgroundColor;
  }
}

getRandomHexColor();
