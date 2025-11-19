function applyShape(type) {
  const p = document.getElementById("preview");
  const canvas = document.getElementById("pngCanvas");
  canvas.style.display = "none";
  p.style.borderRadius = "0";
  if (type === "line") { p.style.height = "12px"; p.style.width = "100%"; }
  if (type === "rectangle") { p.style.height = "100vh"; p.style.width = "calc(100% - 260px)"; }
  if (type === "ellipse") { p.style.width = "350px"; p.style.height = "350px"; p.style.borderRadius = "50%"; }
  if (type === "png") { canvas.style.display = "block"; }
}