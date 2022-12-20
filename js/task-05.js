// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
// підставляє його поточне значення в span#name - output.Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

const addCurrentValue = (event) => {
  nameOutputEl.textContent = event.currentTarget.value;
  if (!event.currentTarget.value) {
    nameOutputEl.textContent = "Anonymous";
  }
};

inputEl.addEventListener("input", addCurrentValue);
