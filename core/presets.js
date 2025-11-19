function applyPreset(preset) {
  const list = {
    pastel: ["#ff9bff", "#d8b6ff", "#a8d8ff", "#a1ffe7", "#fffca8", "#ffc4a8"],
    aurora: ["#00ffa6", "#00e1ff", "#007bff", "#b400ff", "#ff00c8", "#ff0066"],
    cyber:  ["#00eaff", "#008cff", "#0033ff", "#7a00ff", "#ff007a", "#ff0020"]
  };

  if (preset !== "custom") {
    [c1, c2, c3, c4, c5, c6].forEach((el, i) =>
      el.value = list[preset][i]
    );
  }

  updateBorder();
}

presetSelect.addEventListener("change", e => applyPreset(e.target.value));
