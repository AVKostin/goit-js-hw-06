import images from "./data_images.js";

const ulGalleryEl = document.querySelector(".gallery");

// const image = images.reduce(
//   (acc, { url, alt }) =>
//     (acc += `<li><img src='${url}', alt='${alt}' width = "300" height = "200"/></li>`),
//   ""
// );
// ulGalleryEl.insertAdjacentHTML("beforeend", image);

const galleryArr = images.map((image) => {
  const listEl = document.createElement("li");
  const imgEl = document.createElement("img");
  imgEl.src = image.url;
  imgEl.alt = image.alt;
  imgEl.width = 300;
  imgEl.height = 200;
  listEl.appendChild(imgEl);
  return listEl;
});

ulGalleryEl.append(...galleryArr);

Object.assign(ulGalleryEl.style, {
  width: "1000px",
  margin: "0 auto",
  display: "flex",
  flexWrap: "no-wrap",
  listStyle: "none",
  justifyContent: "space-between",
});
