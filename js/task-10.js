function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів
// очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const inputEl = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divForBoxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  let amount = Number(inputEl.value);
  let sizes = 30;

  for (let i = 1; i <= amount; i += 1) {
    let newDiv = document.createElement("div");
    newDiv.style.width = `${sizes}px`;
    newDiv.style.height = `${sizes}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    divForBoxes.append(newDiv);
    sizes += 10;
  }
}

function destroyBoxes() {
  divForBoxes.innerHTML = "";
}
