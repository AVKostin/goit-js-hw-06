const inputEl = document.querySelector("input");
const spanEl = document.querySelector("span");
const sliderTextSize = () => {
  spanEl.style.fontSize = inputEl.value + "px";
};
sliderTextSize();
inputEl.addEventListener("input", sliderTextSize);
