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

let counterValue = 0;

const plusBtnEl = document.querySelector('button[data-action="increment"]');
const minusBtnEl = document.querySelector('button[data-action="decrement"]');
const counterEl = document.querySelector("#value");

plusBtnEl.addEventListener("click", () => {
    counterValue += 1;
    counterEl.textContent = counterValue;
});

minusBtnEl.addEventListener("click", () => {
    counterValue -= 1;
    counterEl.textContent = counterValue;
});
