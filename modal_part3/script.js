'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-modal");
const showBtns = document.querySelectorAll(".show-modal");

for (const showBtn of showBtns) {
  showBtn.addEventListener("click", function() {
    modal.classList.remove("hidden");
  });
}
