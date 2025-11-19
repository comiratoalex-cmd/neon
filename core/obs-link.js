function generateOBSLink() {
  const url = window.location.origin + window.location.pathname + "?border=1";
  document.getElementById("obsLink").value = url;
}

copyObs.onclick = () => {
  obsLink.select();
  document.execCommand("copy");
};
