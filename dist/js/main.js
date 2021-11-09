const menuBtn = document.querySelector(".menuBtn");
const menuBurger = document.querySelector(".menuBurger");

menuBtn.addEventListener("click", () => {
  menuBurger.classList.toggle("open");
  document.body.classList.toggle("fixed");
});
