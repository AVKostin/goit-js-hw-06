const spanEl = document.getElementById("text");
const inputEl = document.getElementById("font-size-control");
const spanTextSize = () => {
  spanEl.style.fontSize = inputEl.value + "px";
};
spanTextSize();

inputEl.addEventListener("input", () => {
  sliderTextSize();
});

const sliderTextSize = () => {
  spanTextSize();
};
