
var link = document.querySelector(".button-contacts");
var hide_link = document.querySelector(".close-button");
var modal = document.querySelector(".popup");

link.addEventListener("click", function (evt) {
    modal.classList.add("modal-show");
});

hide_link.addEventListener("click", function (evt) {
    modal.classList.remove("modal-show");
});