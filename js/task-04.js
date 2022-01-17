const counterValue = document.querySelector("#value");
const counterCounter = document.querySelector("#counter");
let valueEl = Number(counterValue.textContent);
const countText = () => {
  counterValue.textContent = valueEl;
};

const decrBtn = decrCounter.firstElementChild;
const incrBtn = incrCounter.lastElementChild;

incrBtn.addEventListener("click", () => {
  valueEl += 1;
  countText();
});
decrBtn.addEventListener("click", () => {
  valueEl -= 1;
  countText();
});
