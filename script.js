const menuToggle = document.querySelector(".menu input");
const nav = document.querySelector(".navigation .links");
const hero = document.querySelector(".preview.Albedo");
const next = document.querySelector(
  ".Albedo .next",
  ".Asuna .next",
  ".Megumi .next"
);
const previous = document.querySelector(
  ".Albedo .previous",
  ".Asuna .previous",
  ".Megumi .previous"
);
const asunaNext = document.querySelector(
  ".preview_home .actionFigure .preview.Asuna .next"
);
const asunaPrevious = document.querySelector(
  ".preview_home .actionFigure .preview.Asuna .previous"
);
const megumiNext = document.querySelector(
  ".preview_home .actionFigure .preview.Megumi .next"
);
const megumiPrevious = document.querySelector(
  ".preview_home .actionFigure .preview.Megumi .previous"
);
const home = document.querySelector(".links a");


menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
next.addEventListener("click", function () {
  hero.classList.add("remove");
});
previous.addEventListener("click", function () {
  hero.classList.add("remove");
});
asunaPrevious.addEventListener("click", function () {
  hero.classList.remove("remove");
});
asunaNext.addEventListener("click", function () {
  hero.classList.add("remove");
});
megumiNext.addEventListener("click", function () {
  hero.classList.remove("remove");
});
megumiPrevious.addEventListener("click", function () {
  hero.classList.add("remove");
});

home.addEventListener("click", function() {
  hero.classList.remove("remove");
})