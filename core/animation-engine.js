let pos = 0;
function animate() {
  pos += 0.3;
  document.getElementById("preview").style.backgroundPosition = pos + "% 50%";
  requestAnimationFrame(animate);
}
animate();