function updateBorder() {
  const preview = document.getElementById("preview");

  const colors = [
    c1.value, c2.value, c3.value,
    c4.value, c5.value, c6.value
  ];

  preview.style.background = `linear-gradient(90deg, ${colors.join(",")})`;
  preview.style.backgroundSize = "400% 400%";

  applyShape(borderType.value);
  generateOBSLink();
}

document.querySelectorAll("input,select").forEach(el =>
  el.addEventListener("input", updateBorder)
);

updateBorder();
