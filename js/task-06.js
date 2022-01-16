const inputEl = document.getElementById("validation-input");
const inputLength = inputEl.dataset.length;

inputEl.addEventListener("blur", (event) => {
  event.target.value.length === Number(inputLength)
    ? inputEl.setAttribute("class", "valid")
    : inputEl.setAttribute("class", "invalid");
});
