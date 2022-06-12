var hamburger = document.querySelector(".hamburger");
var nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("navOpen");
});
