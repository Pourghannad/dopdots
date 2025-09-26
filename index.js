const canvas = document.querySelector("canvas");
const toast = document.getElementById("toast");
const renderDemoCode = () => {
  document.querySelector(
    ".demo-container code"
  ).innerHTML = `  <‌script src="dopdots.bundle.js"><‌/script>
  <‌div class="canvas-wrapper">
    ${canvas.outerHTML
      .toString()
      .replace(
        "<canvas",
        "‌<‌canvas                                                      "
      )
      .replaceAll('" ', '"\n      ')}<‌/canvas>
  <‌/div>`;
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

document.querySelector(".start-angle").addEventListener("input", (event) => {
  canvas.dataset.startangle = event.target.value;
  dopDots(document.querySelector("main canvas").getContext("2d"));
  renderDemoCode();
});

document.querySelector(".end-angle").addEventListener("input", (event) => {
  canvas.dataset.endangle = event.target.value;
  dopDots(document.querySelector("main canvas").getContext("2d"));
  renderDemoCode();
});

document.querySelector(".element-rect").addEventListener("input", (event) => {
  canvas.dataset.elementrect = `${event.target.checked}`;
  dopDots(document.querySelector("main canvas").getContext("2d"));
  renderDemoCode();
});

document.querySelector(".main-color").addEventListener("input", (event) => {
  canvas.dataset.color = event.target.value;
  dopDots(document.querySelector("main canvas").getContext("2d"));
  renderDemoCode();
});

document.querySelector(".second-color").addEventListener("input", (event) => {
  canvas.dataset.secondcolor = event.target.value;
  dopDots(document.querySelector("main canvas").getContext("2d"));
  renderDemoCode();
});

document.querySelector("button").addEventListener("click", () => {
  const code = document
    .querySelector(".demo-container code")
    .textContent.toString()
    .trim()
    .replaceAll("<‌", "<")
    .replaceAll(" ‌<", "<")
    .replaceAll("         ", " ");
  navigator.clipboard.writeText(code).then(
    function () {
      console.log("Copying to clipboard was successful!");
      toast.innerText = "Copying to clipboard was successful.";
      toast.classList.add("active");

      setTimeout(() => {
        toast.classList.remove("active");
      }, 1400);
    },
    function (err) {
      console.error("Could not copy text: ", err);
    }
  );
});
