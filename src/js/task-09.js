const btnEl = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const backgroundBodyColor = () => {
  const curColor = `${getRandomHexColor()}`;
  document.body.style.backgroundColor = curColor;
  spanRef.textContent = curColor;
};

btnEl.addEventListener("click", backgroundBodyColor);
