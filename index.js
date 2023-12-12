const canvas = document.querySelector("canvas");
document.addEventListener("DOMContentLoaded", () => {
  dopDots(document.querySelector("main canvas").getContext("2d"));
  const canvasDemo = `<‌canvas width="300px" height="300px" data-margin="10" data-type="grid" data-elementsize="3" data-color="#6082dd"
                  data-elementformousemove=".canvas-wrapper" data-moveradius="25" data-secondColor="#ffffff"></‌canvas>`;
  document.querySelector(".demo-container code").innerHTML = canvasDemo;
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
