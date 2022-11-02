// let inputEl = document.querySelector("#name-input");
// let outputEl = document.querySelector("#name-output");

// const onInputChange = (event) => {
//   inputEl = event.currentTarget.value;
//   inputEl === ""
//     ? (outputEl.innerText = "Незнакомец")
//     : (outputEl.innerText = inputEl.trim());
// };
// inputEl.addEventListener("input", onInputChange);

let inputEl = document.querySelector("#name-input");
let outputEl = document.querySelector("#name-output");
inputEl.addEventListener("input", onInput);

function onInput(e) {
    outputEl.textContent = e.currentTarget.value || "Незнакомец";
}
