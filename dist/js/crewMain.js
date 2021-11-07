const dotsFirst = document.querySelector(".dots #first");
const dotsSecond = document.querySelector(".dots #second");
const dotsThird = document.querySelector(".dots #third");
const dotsFourth = document.querySelector(".dots #fourth");

dotsFirst.addEventListener("click", () => {
  dotsFirst.classList.add("current");

  dotsSecond.classList.remove("current");
  dotsThird.classList.remove("current");
  dotsFourth.classList.remove("current");
});

dotsSecond.addEventListener("click", () => {
  dotsSecond.classList.add("current");

  dotsFirst.classList.remove("current");
  dotsThird.classList.remove("current");
  dotsFourth.classList.remove("current");
});

dotsThird.addEventListener("click", () => {
  dotsThird.classList.add("current");

  dotsFirst.classList.remove("current");
  dotsSecond.classList.remove("current");
  dotsFourth.classList.remove("current");
});

dotsFourth.addEventListener("click", () => {
  dotsFourth.classList.add("current");

  dotsFirst.classList.remove("current");
  dotsSecond.classList.remove("current");
  dotsThird.classList.remove("current");
});
