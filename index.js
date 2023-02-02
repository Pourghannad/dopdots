function dopDots(canvasCtx) {
    const canvas = canvasCtx.canvas;
    const ctx = canvasCtx;
    const marginOfElements = canvas.dataset.margin;
    const padding = marginOfElements / 2;
    const elementSize = parseInt(canvas.dataset.elementsize, 10);
    const elementsColor = canvas.dataset.color;
    const elementForMouseMove = document.querySelector(
      canvas.dataset.elementformousemove
    );
    const elementMoveRadius = parseInt(canvas.dataset.moveradius, 10);
    const animationDelayTime = parseInt(
      canvas.dataset.animationdelaytime,
      10
    );
    const moveSpeed = parseInt(canvas.dataset.movespeed, 10);
    function renderGrid(x, y, offsetX, offsetY) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 1; i < canvas.height / marginOfElements; i++) {
        for (
          let j = 0;
          j < canvas.width / marginOfElements + padding;
          j++
        ) {
          let positionX = j * marginOfElements + padding;
          let positionY = i * marginOfElements + padding;
          if (
            j * marginOfElements + padding > offsetX - elementMoveRadius &&
            j * marginOfElements + padding < offsetX + elementMoveRadius &&
            i * marginOfElements > offsetY - elementMoveRadius &&
            i * marginOfElements < offsetY + elementMoveRadius
          ) {
            //   var positionX = (j * marginOfElements + padding);
            //   var positionY = (i * marginOfElements + padding);
            ctx.beginPath();
            ctx.arc(positionX, positionY, elementSize, 0, 2 * Math.PI);
            ctx.fillStyle = "#61737f";
            ctx.fill();
            // setTimeout(() => {
            //     ctx.beginPath();
            //     ctx.arc(positionX, positionY, elementSize*2 , 0, 2 * Math.PI);
            //     ctx.fillStyle = elementsColor;
            //     ctx.fill();
            // }, animationDelayTime);
          } else {
            ctx.beginPath();
            ctx.arc(positionX, positionY, elementSize, 0, 2 * Math.PI);
            ctx.fillStyle = elementsColor;
            ctx.fill();
          }
        }
      }
    }
    if (canvas.width && canvas.height) {
      if (canvas.dataset.type === "grid") {
        renderGrid(1, 1, 1, 1);
      } else if (canvas.dataset.type === "line") {
        const manifest = JSON.parse(canvas.dataset.manifest);
        if (manifest.lineDirection === "y") {
          const maxLine =
            (canvas.height - manifest.startPoint.y) / marginOfElements;
          if (manifest.endPoint === "fullHeight") {
            for (let i = 0; i < maxLine; i++) {
              const positionY =
                manifest.startPoint.y + i * marginOfElements;
              ctx.beginPath();
              ctx.arc(
                manifest.startPoint.x,
                positionY,
                elementSize,
                0,
                2 * Math.PI
              );
              ctx.fillStyle = elementsColor;
              ctx.fill();
            }
          }
        } else if (manifest.lineDirection === "x") {
          const maxLine =
            (canvas.width - manifest.startPoint.x) / marginOfElements;
          if (manifest.endPoint === "fullWidth") {
            for (let i = 0; i < maxLine; i++) {
              const positionX =
                manifest.startPoint.x + i * marginOfElements;
              ctx.beginPath();
              ctx.arc(
                positionX,
                manifest.startPoint.y,
                elementSize,
                0,
                2 * Math.PI
              );
              ctx.fillStyle = elementsColor;
              ctx.fill();
            }
          }
        }
      }
    } else {
      throw "Canvas should have width and height";
    }
    if (elementForMouseMove) {
      elementForMouseMove.addEventListener(
        "mousemove",
        ({ offsetX, offsetY }) => {
            console.log('asdsad', offsetX, offsetY);
        //   renderGrid(1 + offsetX/(moveSpeed*650) , 1 + offsetY/(moveSpeed*650) , 1 + ((offsetY + offsetX)/2)/1750 , null);
          renderGrid(100, 10, 20, 20);
        //   ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      );
    }
  }
  document.addEventListener("DOMContentLoaded", () => {
    dopDots(document.querySelector("main canvas").getContext("2d"));
  });
  document.querySelector('.margin-input').addEventListener('input', (event) => {
      document.querySelector('canvas')
    console.log('E', event.target.value);
  })