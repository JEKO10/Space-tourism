const home = document.querySelector("#home");
const dest = document.querySelector("#dest");
const crew = document.querySelector("#crew");
const tech = document.querySelector("#tech");

home.addEventListener("click", (e) => {
  home.className = "active";

  dest.classList.remove("active");
  crew.classList.remove("active");
  tech.classList.remove("active");
});

dest.addEventListener("click", (e) => {
  dest.className = "active";

  home.classList.remove("active");
  crew.classList.remove("active");
  tech.classList.remove("active");
});

crew.addEventListener("click", (e) => {
  crew.className = "active";

  home.classList.remove("active");
  dest.classList.remove("active");
  tech.classList.remove("active");
});

tech.addEventListener("click", (e) => {
  tech.className = "active";

  home.classList.remove("active");
  dest.classList.remove("active");
  crew.classList.remove("active");
});
