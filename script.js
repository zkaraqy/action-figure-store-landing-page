const menuToggle = document.querySelector(".menu input");
const nav = document.querySelector(".navigation .links");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

const imgPreview = document.querySelector(".preview");
const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");

nextButton.addEventListener("click", function () {
  if (imgPreview.getAttribute("src") === "image action figure/albedo.png") {
    imgPreview.setAttribute("src", "image action figure/asuna.png");
    imgPreview.setAttribute("title", "asuna");
  } else if (
    imgPreview.getAttribute("src") === "image action figure/asuna.png"
  ) {
    imgPreview.setAttribute("src", "image action figure/yukino.png");
    imgPreview.setAttribute("title", "yukino");
  } else if (
    imgPreview.getAttribute("src") === "image action figure/yukino.png"
  ) {
    imgPreview.setAttribute("src", "image action figure/albedo.png");
    imgPreview.setAttribute("title", "albedo");
  }
});

previousButton.addEventListener("click", function () {
  if (imgPreview.getAttribute("src") === "image action figure/albedo.png") {
    imgPreview.setAttribute("src", "image action figure/yukino.png");
    imgPreview.setAttribute("title", "yukino");
  } else if (
    imgPreview.getAttribute("src") === "image action figure/asuna.png"
  ) {
    imgPreview.setAttribute("src", "image action figure/albedo.png");
    imgPreview.setAttribute("title", "albedo");
  } else if (
    imgPreview.getAttribute("src") === "image action figure/yukino.png"
  ) {
    imgPreview.setAttribute("src", "image action figure/asuna.png");
    imgPreview.setAttribute("title", "asuna");
  }
});
