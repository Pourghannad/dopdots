const canvas = document.querySelector("canvas");
document.addEventListener("DOMContentLoaded", () => {
  dopDots(document.querySelector("main canvas").getContext("2d"));
});
document
  .querySelector(".element-size-input")
  .addEventListener("input", (event) => {
    canvas.dataset.elementsize = event.target.value;
    dopDots(document.querySelector("main canvas").getContext("2d"));
  });
document.querySelector(".margin-input").addEventListener("input", (event) => {
  canvas.dataset.margin = event.target.value;
  dopDots(document.querySelector("main canvas").getContext("2d"));
});
document.querySelector(".move-radius").addEventListener("input", (event) => {
  canvas.dataset.moveradius = event.target.value;
  dopDots(document.querySelector("main canvas").getContext("2d"));
});

document.querySelector(".second-color").addEventListener("input", (event) => {
  canvas.dataset.secondcolor = event.target.value;
  dopDots(document.querySelector("main canvas").getContext("2d"));
});
