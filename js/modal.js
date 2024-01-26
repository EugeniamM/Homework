const modal = document.getElementById("modal-block");

const modalBtnOpen = document.querySelector("#btn-open-modal");
const modalBtnClose = document.querySelector("#btn-close-modal");

// function openModal() {
// 	modal.style.display = "flex";
// }
// function closeModal() {
// 	modal.style.display = "none";
// }
// modalBtnOpen.addEventListener("click", openModal);
// modalBtnClose.addEventListener("click", closeModal);

function toggleModal() {
	modal.classList.toggle("hidden");
	console.log("click");
}
modalBtnOpen.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);
