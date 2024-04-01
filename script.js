"use strict";

const imgs = document.querySelectorAll(".o-img");
const field = document.querySelectorAll(".hakone-field");
const hakone = document.querySelectorAll(".hakone-img");
const overlay = document.querySelectorAll(".overlay");
const button = document.querySelectorAll(".close-button");
const obg = document.querySelector(".o-bg");
const popup = document.querySelectorAll(".popup");
// field.addEventListener("click", function () {
//   field.classList.add("modal");
// });
console.log(button);

// When you click on the image it opens the modal/ large image.
for (let i = 0; i < imgs.length; i++)
  imgs[i].addEventListener("click", function () {
    // imgs[i].classList.add("modal");

    // imgs[i].classList.remove("js-hover");
    popup[i].classList.remove("hidden");
    overlay[i].classList.remove("hidden");
  });

// When you click on the "X" button it closes the modal.
for (let i = 0; i < button.length; i++)
  button[i].addEventListener("click", function () {
    popup[i].classList.add("hidden");
    overlay[i].classList.add("hidden");
  });

// When you click on the overlay class...
for (let i = 0; i < imgs.length; i++)
  overlay[i].addEventListener("click", function () {
    popup[i].classList.add("hidden");
    overlay[i].classList.add("hidden");
  });

for (let i = 0; i < imgs.length; i++)
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      popup[i].classList.add("hidden");
      overlay[i].classList.add("hidden");
    }
  });

// Next Media Queries
