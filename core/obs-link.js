function generateOBSLink() {
  const url = window.location.href + "?obs=1";
  document.getElementById("obsLink").value = url;
}
