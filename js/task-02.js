const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngradientsEl = document.querySelector("#ingredients");
const listOfIngr = ingredients.map((ingr) => {
  const itemLi = document.createElement("li");
  itemLi.textContent = ingr;
  itemLi.classList.add("item");
  return itemLi;
});
ulIngradientsEl.append(...listOfIngr);
