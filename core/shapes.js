function applyShape(type) {
  const preview = document.getElementById("preview");

  preview.className = "";

  if (type === "line") {
    preview.style.height = "20px";
    preview.style.width = "100%";
  }
  if (type === "rectangle") {
    preview.style.position = "fixed";
    preview.style.inset = "0";
  }
  if (type === "ellipse") {
    preview.style.width = "400px";
    preview.style.height = "400px";
    preview.style.borderRadius = "50%";
  }
  if (type === "png") {
    document.getElementById("pngCanvas").style.display = "block";
  }
}
