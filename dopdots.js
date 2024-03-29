function dopDots(canvasCtx) {
  const canvas = canvasCtx.canvas;
  const ctx = canvasCtx;
  const elementForMouseMove = document.querySelector(
    canvas.dataset.elementformousemove
  );
  function mouseMove(event) {
    renderGrid(event.offsetX, event.offsetY);
  }
  function renderGrid(offsetX, offsetY) {
    const marginOfElements = canvas.dataset.margin;
    const padding = marginOfElements / 2;
    const elementSize = parseInt(canvas.dataset.elementsize, 10);
    const elementsColor = canvas.dataset.color;
    const elementMoveRadius = parseInt(canvas.dataset.moveradius, 10);
    const secondColor = canvas.dataset.secondcolor || "#ff0";
    const startAngle = parseInt(canvas.dataset.startangle, 10) || 0;
    const endAngle = parseInt(canvas.dataset.endangle, 10) || 2 * Math.PI;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < canvas.height / marginOfElements; i++) {
      for (let j = 0; j < canvas.width / marginOfElements + padding; j++) {
        let positionX = j * marginOfElements + padding;
        let positionY = i * marginOfElements + padding;
        if (
          j * marginOfElements + padding > offsetX - elementMoveRadius &&
          j * marginOfElements + padding < offsetX + elementMoveRadius &&
          i * marginOfElements > offsetY - elementMoveRadius &&
          i * marginOfElements < offsetY + elementMoveRadius
        ) {
          ctx.beginPath();
          ctx.arc(positionX, positionY, elementSize, startAngle, endAngle);
          ctx.fillStyle = secondColor;
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(positionX, positionY, elementSize, startAngle, endAngle);
          ctx.fillStyle = elementsColor;
          ctx.fill();
        }
      }
    }
  }
  if (canvas.width && canvas.height) {
    if (canvas.dataset.type === "grid") {
      renderGrid(1, 1);
    } else if (canvas.dataset.type === "line") {
      const manifest = JSON.parse(canvas.dataset.manifest);
      if (manifest.lineDirection === "y") {
        const maxLine =
          (canvas.height - manifest.startPoint.y) / marginOfElements;
        if (manifest.endPoint === "fullHeight") {
          for (let i = 0; i < maxLine; i++) {
            const positionY = manifest.startPoint.y + i * marginOfElements;
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
            const positionX = manifest.startPoint.x + i * marginOfElements;
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
  if (elementForMouseMove && !elementForMouseMove.getAttribute("listener")) {
    elementForMouseMove.addEventListener("mousemove", mouseMove);
    elementForMouseMove.setAttribute("listener", "true");
  }
}
