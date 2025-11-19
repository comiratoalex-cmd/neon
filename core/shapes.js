function applyShape(type) {
  const preview = document.getElementById("preview");

  if (type === "line") {
    preview.style.position = "fixed";
    preview.style.top = "0";
    preview.style.left = "0";
    preview.style.width = "100vw";
    preview.style.height = "12px";
    preview.style.borderRadius = "0";
  }

  if (type === "rectangle") {
    preview.style.position = "fixed";
    preview.style.inset = "0";
    preview.style.height = "100vh";
    preview.style.width = "100vw";
    preview.style.borderRadius = "0";
  }

  if (type === "ellipse") {
    preview.style.position = "fixed";
    preview.style.width = "350px";
    preview.style.height = "350px";
    preview.style.borderRadius = "50%";
    preview.style.left = "50%";
    preview.style.top = "50%";
    preview.style.transform = "translate(-50%, -50%)";
  }

  if (type === "png") {
    document.getElementById("pngCanvas").style.display = "block";
  } else {
    document.getElementById("pngCanvas").style.display = "none";
  }
}
