const canvas = document.querySelector("canvas");
const renderDemoCode = () => {
  document.querySelector(".demo-container code").innerHTML = `${canvas.outerHTML
    .toString()
    .replace("<canvas", "‌<‌canvas         ")
    .replaceAll('" ', '"        ')}`;
};
document.addEventListener("DOMContentLoaded", () => {
  dopDots(document.querySelector("main canvas").getContext("2d"));
  renderDemoCode();
});
document
  .querySelector(".element-size-input")
  .addEventListener("input", (event) => {
    canvas.dataset.elementsize = event.target.value;
    dopDots(document.querySelector("main canvas").getContext("2d"));
    renderDemoCode();
  });
document.querySelector(".margin-input").addEventListener("input", (event) => {
  canvas.dataset.margin = event.target.value;
  dopDots(document.querySelector("main canvas").getContext("2d"));
  renderDemoCode();
});
document.querySelector(".move-radius").addEventListener("input", (event) => {
  canvas.dataset.moveradius = event.target.value;
  dopDots(document.querySelector("main canvas").getContext("2d"));
  renderDemoCode();
});

document.querySelector(".second-color").addEventListener("input", (event) => {
  canvas.dataset.secondcolor = event.target.value;
  dopDots(document.querySelector("main canvas").getContext("2d"));
  renderDemoCode();
});
