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

const moon = document.querySelector("#moon");
const mars = document.querySelector("#mars");
const europa = document.querySelector("#europa");
const titan = document.querySelector("#titan");

moon.addEventListener("click", (e) => {
  moon.className = "active";

  mars.classList.remove("active");
  europa.classList.remove("active");
  titan.classList.remove("active");
});

mars.addEventListener("click", (e) => {
  mars.className = "active";

  moon.classList.remove("active");
  europa.classList.remove("active");
  titan.classList.remove("active");
});

europa.addEventListener("click", (e) => {
  europa.className = "active";

  moon.classList.remove("active");
  mars.classList.remove("active");
  titan.classList.remove("active");
});

titan.addEventListener("click", (e) => {
  titan.className = "active";

  moon.classList.remove("active");
  mars.classList.remove("active");
  europa.classList.remove("active");
});
