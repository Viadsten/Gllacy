
var link = document.querySelector(".button-contacts");
var hide_link = document.querySelector(".close-button");
var modal = document.querySelector(".modal");

link.onclick = function() {
    modal.style.display = "block";
}

hide_link.onclick = function() {
    modal.style.display = "none";
}