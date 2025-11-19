function generateOBSLink() {
  const link = window.location.origin + window.location.pathname + "?overlay=1";
  document.getElementById("obsLink").value = link;
}

copyObs.onclick = () => {
  obsLink.select();
  document.execCommand("copy");
};

openOBS.onclick = () => {
  window.open(obsLink.value, "_blank");
};
