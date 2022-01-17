const counterValue = document.querySelector("#value");
const counterCounter = document.querySelector("#counter");
let valueEl = Number(counterValue.textContent);
const countText = () => {
  counterValue.textContent = valueEl;
};

const dekrBtn = counterCounter.firstElementChild;
const inkrBtn = counterCounter.lastElementChild;

inkrBtn.addEventListener("click", () => {
  valueEl += 1;
  countText();
});
dekrBtn.addEventListener("click", () => {
  valueEl -= 1;
  countText();
});
