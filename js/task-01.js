const list = document.querySelectorAll("li.item");

console.log(`Number of categories: ${list.length}`);
const uEl = document.querySelectorAll("#categories > li");
uEl.forEach((el) => {
  console.log("\nCategory:", el.firstElementChild.textContent);
  console.log("Elements:", el.lastElementChild.children.length);
});
