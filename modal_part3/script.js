'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-modal");
const showBtns = document.querySelectorAll(".show-modal");

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

for (const showBtn of showBtns) {
  showBtn.addEventListener("click", openModal);
}

// Close modal on click outside of it or close button inside
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function(e) {
  if (e.code === "Escape" && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
