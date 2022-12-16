//Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let valueEl = document.querySelector("#value");
const incrementHandler = () => {
  console.log((counterValue += 1));
};
const decrementHandler = () => {
  console.log((counterValue -= 1));
};

decrementBtn.addEventListener("click", decrementHandler);
incrementBtn.addEventListener("click", incrementHandler);
