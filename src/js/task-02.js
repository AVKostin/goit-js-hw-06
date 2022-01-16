const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");
const listOfIngr = ingredients.map((ingr) => {
  const itemLi = document.createElement("li");
  itemLi.textContent = ingr;
  itemLi.classList.add("item");
  return itemLi;
});
ulEl.append(...listOfIngr);
