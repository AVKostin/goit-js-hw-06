const counterValue = document.querySelector("#value");
let valueEl = Number(counterValue.textContent);
const countText = () => {
  counterValue.innerText = valueEl;
};

const dekrBtn = document.querySelector("#counter").firstElementChild;
const inkrBtn = document.querySelector("#counter").lastElementChild;

inkrBtn.addEventListener("click", (event) => {
  valueEl += 1;
  countText();
});
dekrBtn.addEventListener("click", (event) => {
  valueEl -= 1;
  countText();
});
