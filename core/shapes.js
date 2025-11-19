function applyShape(type) {
  const p = document.getElementById("preview");
  const canvas = document.getElementById("pngCanvas");

  canvas.style.display = "none";

  if (type === "line") {
    p.style.position = "fixed";
    p.style.top = "0";
    p.style.left = "0";
    p.style.width = "100vw";
    p.style.height = "14px";
    p.style.borderRadius = "0";
  }

  if (type === "rectangle") {
    p.style.position = "fixed";
    p.style.top = "0";
    p.style.left = "0";
    p.style.width = "100vw";
    p.style.height = "100vh";
  }

  if (type === "ellipse") {
    p.style.position = "fixed";
    p.style.width = "380px";
    p.style.height = "380px";
    p.style.left = "50%";
    p.style.top = "50%";
    p.style.transform = "translate(-50%, -50%)";
    p.style.borderRadius = "50%";
  }

  if (type === "png") {
    canvas.style.display = "block";
  }
}
