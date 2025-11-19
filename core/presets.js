function applyPreset(p) {
  if (p === "pastel") {
    c1.value = "#ff9bff";
    c2.value = "#d8b6ff";
    c3.value = "#a8d8ff";
    c4.value = "#a1ffe7";
    c5.value = "#fffca8";
    c6.value = "#ffc4a8";
  }

  if (p === "aurora") {
    c1.value = "#00ffa6";
    c2.value = "#00e1ff";
    c3.value = "#007bff";
    c4.value = "#b400ff";
    c5.value = "#ff00c8";
    c6.value = "#ff0066";
  }

  updateBorder();
}

presetSelect.addEventListener("change", e => applyPreset(e.target.value));
