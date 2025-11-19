// Elementos
const preview = document.getElementById("preview");
const borderType = document.getElementById("borderType");
const presetSelect = document.getElementById("presetSelect");
const pngUpload = document.getElementById("pngUpload");
const obsLink = document.getElementById("obsLink");

// Atualiza OBS LINK
function updateOBS() {
  obsLink.value = window.location.href;
}

// Aplica formato da borda
function applyShape() {
  preview.style.borderRadius = "0";

  if (borderType.value === "line") {
    preview.style.height = "12px";
    preview.style.width = "100%";
  }

  if (borderType.value === "rectangle") {
    preview.style.top = "0";
    preview.style.left = "260px";
    preview.style.height = "100vh";
    preview.style.width = "calc(100% - 260px)";
  }

  if (borderType.value === "ellipse") {
    preview.style.width = "300px";
    preview.style.height = "300px";
    preview.style.borderRadius = "50%";
    preview.style.left = "50%";
    preview.style.top = "50%";
    preview.style.transform = "translate(-50%, -50%)";
  }

  if (borderType.value === "png") {
    document.getElementById("pngCanvas").style.display = "block";
  }
}

// Aplica preset
function applyPreset() {
  const presets = {
    pastel: ["#ff9bff", "#d8b6ff", "#a8d8ff", "#a1ffe7"],
    aurora: ["#00ffa6", "#00e1ff", "#007bff", "#b400ff"],
    cyber:  ["#00eaff", "#008cff", "#0033ff", "#7a00ff"]
  };

  if (presetSelect.value !== "custom") {
    const colors = presets[presetSelect.value];
    c1.value = colors[0];
    c2.value = colors[1];
    c3.value = colors[2];
    c4.value = colors[3];
  }

  updateGradient();
}

// Atualiza cor da borda
function updateGradient() {
  preview.style.background =
    `linear-gradient(90deg, ${c1.value}, ${c2.value}, ${c3.value}, ${c4.value})`;
}

// PNG BORDER
pngUpload.addEventListener("change", function () {
  const file = this.files[0];
  if (!file) return;

  const img = new Image();
  img.src = URL.createObjectURL(file);

  img.onload = function () {
    const canvas = document.getElementById("pngCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0);
    borderType.value = "png";
    applyShape();
  };
});

// EVENTOS
[presetSelect, c1, c2, c3, c4, borderType].forEach(el =>
  el.addEventListener("input", () => {
    applyShape();
    applyPreset();
    updateGradient();
    updateOBS();
  })
);

// Inicialização
applyShape();
applyPreset();
updateGradient();
updateOBS();
