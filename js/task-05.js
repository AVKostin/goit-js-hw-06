let inputEl = document.querySelector("#name-input");
let outputEl = document.querySelector("#name-output");

const onInputChange = () => {
  inputEl = event.currentTarget.value;
  outputEl.innerText = inputEl.trim();
  if (inputEl === "") {
    outputEl.innerText = "Незнакомец";
  }
};
inputEl.addEventListener("input", onInputChange);
