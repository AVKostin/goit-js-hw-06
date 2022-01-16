import images from "./data_images.js";

const ulEl = document.querySelector(".gallery");

Object.assign(ulEl.style, {
  width: "1000px",
  margin: "0 auto",
  display: "flex",
  flexWrap: "no-wrap",
  listStyle: "none",
  justifyContent: "space-between",
});

const image = images.reduce(
  (acc, { url, alt }) =>
    (acc += `<li><img src='${url}', alt='${alt}' width = "300" height = "200"/></li>`),
  ""
);
ulEl.insertAdjacentHTML("beforeend", image);
