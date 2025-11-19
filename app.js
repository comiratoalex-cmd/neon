console.log("Neon Generator Loaded");

function updateBorder() {
  applyShape(document.getElementById("borderType").value);
  applyPreset(document.getElementById("presetSelect").value);
  generateOBSLink();
}

document.querySelectorAll("input,select").forEach(el => {
  el.addEventListener("input", updateBorder);
});

updateBorder();
