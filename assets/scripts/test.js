document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("preloader");
  const data = document.getElementById("data");

  console.log("loading...");
  // data.style.visibility = "hidden";

  window.addEventListener("load", function () {
    console.log("loaded");
    loader.style.display = "none";
    data.classList.remove("invissible");
  });
});

console.log('called');
