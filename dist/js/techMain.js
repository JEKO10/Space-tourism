const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");

one.addEventListener("click", () => {
  one.classList.add("current");

  two.classList.remove("current");
  three.classList.remove("current");
});

two.addEventListener("click", () => {
  two.classList.add("current");

  one.classList.remove("current");
  three.classList.remove("current");
});

three.addEventListener("click", () => {
  three.classList.add("current");

  one.classList.remove("current");
  two.classList.remove("current");
});
