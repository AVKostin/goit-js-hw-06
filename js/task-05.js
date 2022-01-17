let inputEl = document.querySelector("#name-input");
let outputEl = document.querySelector("#name-output");
inputEl.addEventListener("input", onInput);

function onInput(e) {
  outputEl.textContent = e.currentTarget.value || "Незнакомец";
}
