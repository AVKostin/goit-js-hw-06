import images from "./data_images.js";

const ulEl = document.querySelector(".gallery");

Object.assign(ulEl.style, {
  display: "flex",
  flexWrap: "wrap",
  listStyle: "none",
});

const image = images.reduce(
  (acc, { url, alt }) =>
    (acc += `<li><img src='${url}', alt='${alt}' width = "300" height = "200"/></li>`),
  ""
);
ulEl.insertAdjacentHTML("beforeend", image);
