let pos = 0;

function animate() {
  pos += 0.4;
  document.getElementById("preview").style.backgroundPosition = pos + "% 0%";
  requestAnimationFrame(animate);
}

animate();
