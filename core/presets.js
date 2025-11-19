function applyPreset(preset) {
  const presets = {
    pastel: ["#ff9bff", "#d8b6ff", "#a8d8ff", "#a1ffe7"],
    aurora: ["#00ffa6", "#00e1ff", "#007bff", "#b400ff"],
    cyber:  ["#00eaff", "#008cff", "#0033ff", "#7a00ff"]
  };
  if (preset !== "custom") {
    [c1, c2, c3, c4].forEach((c,i)=> c.value = presets[preset][i]);
  }
}