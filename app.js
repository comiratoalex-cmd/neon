const preview = document.getElementById("preview");
const borderType = document.getElementById("borderType");
const presetSelect = document.getElementById("presetSelect");
const pngUpload = document.getElementById("pngUpload");
const obsLink = document.getElementById("obsLink");

function updateOBS() { obsLink.value = window.location.href; }

function updateGradient() {
  preview.style.background =
    `linear-gradient(90deg, ${c1.value}, ${c2.value}, ${c3.value}, ${c4.value})`;
}

[presetSelect, c1, c2, c3, c4, borderType].forEach(el =>
  el.addEventListener("input", () => {
    applyShape(borderType.value);
    applyPreset(presetSelect.value);
    updateGradient();
    updateOBS();
  })
);

applyShape(borderType.value);
applyPreset(presetSelect.value);
updateGradient();
updateOBS();