// const counterValue = document.querySelector("#value");
// let valueEl = Number(counterValue.textContent);
// const countText = () => {
//     counterValue.innerText = valueEl;
// };

// const dekrBtn = document.querySelector("#counter").firstElementChild;
// const inkrBtn = document.querySelector("#counter").lastElementChild;

// inkrBtn.addEventListener("click", () => {
//     valueEl += 1;
//     countText();
// });
// dekrBtn.addEventListener("click", () => {
//     valueEl -= 1;
//     countText();
// });

//Создем переменную в которой будет храниться текущее значение счетчика и инициализируем её значением 0.
let counterValue = 0;

// Находим елементы button и span
const plusBtnEl = document.querySelector('button[data-action="increment"]');
const minusBtnEl = document.querySelector('button[data-action="decrement"]');
const counterEl = document.querySelector("#value");

// Добавляем слушателя события (клик на кнопке),
// внутри кот.увеличиваем и уменьшаем текущее значение counterValue,
// меняем текстовое содержание counterEl = counterValue
plusBtnEl.addEventListener("click", () => {
    counterValue += 1;
    counterEl.textContent = counterValue;
});

minusBtnEl.addEventListener("click", () => {
    counterValue -= 1;
    counterEl.textContent = counterValue;
});
